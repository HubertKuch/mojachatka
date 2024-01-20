const { addRefreshTokenToWhitelist } = require("../../utils/auth");
const { generateTokens } = require("../../utils/jwt");
const { getUserByID, GetUserByEmail } = require("../../services/getUsers");
const bcrypt = require("bcrypt");
const { sendMail } = require("../../utils/mail");
const { UserType } = require("@prisma/client");
const { db } = require("../../utils/db");
const { v4: uuidv4 } = require("uuid");
const {
  getIndividualUserSchema,
  getAgentUserSchema,
  getDeveloperUserSchema,
  INDIVIDUAL_USER_SCHEMA,
  AGENT_USER_SCHEMA,
  DEVELOPER_USER_SCHEMA,
} = require("../../schemas/UserRegisterSchema");

class AuthController {
  static async authenticated(req, res) {
    res.status(200).json({ authenticated: !!req.cookies["auth-token"] });
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.status(400).json({ message: "Niepoprawne dane" });
        return;
      }

      const existingUser = await GetUserByEmail(email);

      if (!existingUser) {
        res.status(403).json({ message: "Niepoprawne dane" });
        return;
      }

      const validPassword = await bcrypt.compare(
        password,
        existingUser.password,
      );

      if (!validPassword) {
        res.status(403).json({ message: "Niepoprawne dane" });
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

      res
        .status(200)
        .cookie("auth-token", accessToken, {
          httpOnly: true,
          expires: new Date(Date.now() + 7200000),
        })
        .cookie("refresh-token", refreshToken, {
          httpOnly: true,
          expires: new Date(Date.now() + 172800000),
        })
        .json({
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

  static async register(req, res, next) {
    function getValidator(type) {
      return {
        INDIVIDUAL: getIndividualUserSchema(),
        AGENT: getAgentUserSchema(),
        DEVELOPER: getDeveloperUserSchema(),
      }[type];
    }

    function getSchema(type) {
      return {
        INDIVIDUAL: INDIVIDUAL_USER_SCHEMA,
        AGENT: AGENT_USER_SCHEMA,
        DEVELOPER: DEVELOPER_USER_SCHEMA,
      }[type];
    }

    try {
      const type = req.query.type;
      const body = req.body;

      if (!type || !Object.values(UserType).includes(type)) {
        console.log(type, Object.values(UserType), req.query);
        return res.status(400).json({ message: "Typ konta jest wymagany" });
      }

      const validator = getValidator(type);

      validator(body);

      if (validator.errors) {
        if (
          validator.errors.find((e) => e.keywordLocation.includes("elephone"))
        ) {
          return res
            .status(400)
            .json({ message: "Niepoprawny numer telefonu" });
        }

        return res.status(400).json({ message: "Niepoprawne zapytanie" });
      }

      let emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!emailRegex.test(body.email)) {
        res.status(400).json({ message: "Niepoprawny mail" });
        return;
      }

      const checkEmail = !!(await db.user.findFirst({
        where: {
          email: body.email,
        },
      }));

      if (checkEmail) {
        res.status(400).json({ message: "Mail istnieje." });
        return;
      }

      if (body.password !== body.passwordRepeat) {
        res.status(400).json({ message: "Hasła różnią się" });
        return;
      }

      const { id } = await AuthController.registerUserByType(type, body);
      const newUser = await db.user.findFirst({ where: { id } });
      const jti = uuidv4();
      const { accessToken, refreshToken } = generateTokens(newUser, jti);

      await addRefreshTokenToWhitelist({
        jti,
        refreshToken,
        userId: newUser.id,
      });
      await sendMail(body.email);

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
          create: {
            type: "AGENT",
            firstName: body.salesRepFirstName,
            lastName: body.salesRepLastName,
            email: body.email,
            password: bcrypt.hashSync(body.password, 12),
          },
        },
        nip: body.nip,
        name: body.companyName,
        house: body.house,
        address: body.address,
        regon: body.regon,
        license: body.license,
        zipCode: body.zipCode,
        SalesRep: {
          create: {
            lastName: body.salesRepLastName,
            firstName: body.salesRepFirstName,
            telephone: body.salesRepTelephone,
            altTelephone: body.salesRepAltTelephone,
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
          create: {
            type: "DEVELOPER",
            firstName: body.salesRepFirstName,
            lastName: body.salesRepLastName,
            email: body.email,
            password: bcrypt.hashSync(body.password, 12),
          },
        },
        nip: body.nip,
        ame: body.companyName,
        house: body.house,
        address: body.address,
        regon: body.regon,
        license: body.license,
        zipCode: body.zipCode,
        SalesRep: {
          create: {
            lastName: body.salesRepLastName,
            firstName: body.salesRepFirstName,
            telephone: body.salesRepTelephone,
            altTelephone: body.salesRepAltTelephone,
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
