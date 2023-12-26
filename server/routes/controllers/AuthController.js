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

  static async register(req, res) {
    try {
      let { username, email, password, confirmPassword, phoneNumber, type } =
        req.body;

      if (!type || !Object.values(UserType).includes(type)) {
        return res.status(400).json({ message: "Account type is required" });
      }

      let emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

      if (!emailRegex.test(email)) {
        res.status(400).json({ message: "Invalid Email" });
        return;
      }

      const checkUser = !!(await db.user.findFirst({
        where: {
          username: username,
        },
      }));

      const checkEmail = !!(await db.user.findFirst({
        where: {
          email: email,
        },
      }));

      phoneNumber = phoneNumber.replace(" ", "").trim();

      const checkPhone =
        !!(await db.user.findFirst({
          where: {
            phoneNumber,
          },
        })) && phoneNumber.length === 9;

      if (checkPhone) {
        res
          .status(400)
          .json({ message: "Phone number isn't valid or exists." });
        return;
      }

      if (checkUser) {
        res.status(400).json({ message: "Username already exists." });
        return;
      }

      if (username > 20) {
        res
          .status(400)
          .json({ message: "Username cannot have more than 20 characters." });
        return;
      }

      if (checkEmail) {
        res.status(400).json({ message: "Email already exists." });
        return;
      }

      if (password !== confirmPassword) {
        res.status(400).json({ message: "Passwords must match" });
        return;
      }

      if (!username || username.lenght === 0) {
        res.status(400).json({ message: "Username cannot be empty" });
        return;
      }

      const newUser = await createUser({
        username,
        email,
        password,
        phoneNumber,
        type,
      });

      const jti = uuidv4();
      const { accessToken, refreshToken } = generateTokens(newUser, jti);

      await addRefreshTokenToWhitelist({
        jti,
        refreshToken,
        userId: newUser.id,
      });
      await sendMail(newUser.email);

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

  static async getProfile(req, res) {
    const userId = req.payload.data.id;

    const user = await getUserByID(userId);
    delete user.password;
    res.status(200).json({ message: "Successfull", user: user });
  }
}

module.exports = AuthController;
