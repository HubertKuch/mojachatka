const {
  addRefreshTokenToWhitelist,
  deleteRefreshToken,
  findRefreshTokenById,
} = require("../../utils/auth");
const { GetUserByEmail } = require("../../services/getUsers");
const { generateTokens } = require("../../utils/jwt");
const { getUserByID } = require("../../services/getUsers");
const { hashToken } = require("../../utils/hash");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { createUser } = require("../../services/createUser");
const { sendMail } = require("../../utils/mail");
const { UserType } = require("@prisma/client");
const { db } = require("../../utils/db");
const jwt = require("jsonwebtoken");
const {
  getIndividualUserSchema,
  getAgentUserSchema,
  getDeveloperUserSchema,
} = require("../../schemas/UserRegisterSchema");
const APIError = require("../../errors/APIError");

class AuthController {
  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ message: "You must provide login credentials" });
        return;
      }

      const existingUser = await GetUserByEmail(email);

      if (!existingUser) {
        res.status(403).json({ message: "Invalid login credentialsss" });
        return;
      }

      const validPassword = await bcrypt.compare(
        password,
        existingUser.password,
      );

      if (!validPassword) {
        res.status(403).json({ message: "Invalid login credentials" });
        return;
      }

      const jti = uuidv4();
      const { accessToken, refreshToken } = generateTokens(existingUser, jti);
      await addRefreshTokenToWhitelist({
        jti,
        refreshToken,
        userId: existingUser.id,
      });
      delete existingUser.password;
      res.status(200).json({
        message: "Successfull",
        token: accessToken,
        refresh: refreshToken,
        user: existingUser,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        res.status(400).json({ message: "Missing refresh token." });
      }

      const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const savedRefreshToken = await findRefreshTokenById(payload.jti);

      if (!savedRefreshToken || savedRefreshToken.revoked === true) {
        res.status(401).json({ message: "Unauthorized" });
      }

      const hashedToken = hashToken(refreshToken);
      if (hashedToken !== savedRefreshToken.hashedToken) {
        res.status(401).json({ message: "Unauthorized" });
      }

      const user = await getUserByID(payload.userId);
      if (!user) {
        res.status(401).json({ message: "Unauthorized" });
      }

      await deleteRefreshToken(savedRefreshToken.id);
      const jti = uuidv4();
      const { accessToken, refreshToken: newRefreshToken } = generateTokens(
        user,
        jti,
      );
      await addRefreshTokenToWhitelist({
        jti,
        refreshToken: newRefreshToken,
        userId: user.id,
      });

      res.json({
        accessToken,
        refreshToken: newRefreshToken,
      });
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    function getValidator(type) {
      return {
        INDIVIDUAL: getIndividualUserSchema(),
        AGENT: getAgentUserSchema(),
        DEVELOPER: getDeveloperUserSchema(),
      }[type];
    }

    try {
      const type = req.query.type;
      const body = req.body;

      if (!type || !Object.values(UserType).includes(type)) {
        return res.status(400).json({ message: "Account type is required" });
      }

      const validator = getValidator(type);

      validator(body);

      if (validator.errors) {
        return next(new APIError("Nieprawidlowe zapytanie", 400));
      }

      let emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!emailRegex.test(body.email)) {
        res.status(400).json({ message: "Invalid Email" });
        return;
      }

      const checkEmail = !!(await db.user.findFirst({
        where: {
          email: body.email,
        },
      }));

      if (checkEmail) {
        res.status(400).json({ message: "Email already exists." });
        return;
      }

      if (body.password !== body.passwordRepeat) {
        res.status(400).json({ message: "Passwords must match" });
        return;
      }

      const { id, email } = await AuthController.registerUserByType(type, body);
      const newUser = await db.user.findUnique({ where: { email, id } });
      const jti = uuidv4();
      const { accessToken, refreshToken } = generateTokens(newUser, jti);

      await addRefreshTokenToWhitelist({
        jti,
        refreshToken,
        userId: newUser.id,
      });
      await sendMail(email);

      res.status(200).json({
        message: "User created successfully",
        token: accessToken,
        refresh: refreshToken,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal Server Error!" });
    }
  }

  static async registerUserByType(type, body) {
    if (type === UserType.DEVELOPER) {
      const user = await this.registerDeveloper(body);

      return { userId: user.id, email: user.email };
    } else if (type === UserType.AGENT) {
      const user = await this.registerAgent(body);

      return { userId: user.id, email: user.email };
    } else if (type === UserType.INDIVIDUAL) {
      const user = await this.registerIndividual(body);

      return { userId: user.id, email: user.email };
    }
  }

  static async registerIndividual(body) {
    return await db.user.create({
      data: {
        type: "INDIVIDUAL",
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        activated: true,
        password: bcrypt.hashSync(body.password, 12),
      },
      select: {
        id: true,
        email: true,
      },
    });
  }

  static async registerAgent(body) {
    return await db.company.create({
      select: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      data: {
        user: {
          connectOrCreate: {
            create: {
              type: "AGENT",
              firstName: body.salesRepFirstName,
              lastName: body.salesRepLastName,
              email: body.email,
              password: bcrypt.hashSync(body.password, 12),
            },
          },
        },
        nip: body.nip,
        name: body.name,
        house: body.house,
        address: body.address,
        regon: body.regon,
        license: body.license,
        zipCode: body.zipCode,
        SalesRep: {
          connectOrCreate: {
            create: {
              lastName: body.salesRepLastName,
              firstName: body.salesRepFirstName,
              telephone: body.salesRepTelephone,
              altTelephone: body.salesRepAltTelephone,
            },
          },
        },
      },
    });
  }

  static async registerDeveloper(body) {
    return await db.company.create({
      select: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      data: {
        user: {
          connectOrCreate: {
            create: {
              type: "DEVELOPER",
              firstName: body.salesRepFirstName,
              lastName: body.salesRepLastName,
              email: body.email,
              password: bcrypt.hashSync(body.password, 12),
            },
          },
        },
        nip: body.nip,
        name: body.name,
        house: body.house,
        address: body.address,
        regon: body.regon,
        license: body.license,
        zipCode: body.zipCode,
        SalesRep: {
          connectOrCreate: {
            create: {
              lastName: body.salesRepLastName,
              firstName: body.salesRepFirstName,
              telephone: body.salesRepTelephone,
              altTelephone: body.salesRepAltTelephone,
            },
          },
        },
      },
    });
  }

  static async getProfile(req, res) {
    const userId = req.payload.data.id;

    const user = await getUserByID(userId);
    delete user.password;
    user.username = `${user.firstName} ${user.lastName}`;
    res.status(200).json({ message: "Successfull", user: user });
  }
}

module.exports = AuthController;
