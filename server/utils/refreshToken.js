const { hashToken } = require("./hash");
const {
  deleteRefreshToken,
  findRefreshTokenById,
  addRefreshTokenToWhitelist,
} = require("./auth");
const jwt = require("jsonwebtoken");
const { getUserByID } = require("../services/getUsers");
const { v4: uuidv4 } = require("uuid");
const { generateTokens } = require("./jwt");

module.exports = async function refreshToken(refreshToken) {
  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const savedRefreshToken = await findRefreshTokenById(payload.jti);

    if (!savedRefreshToken) {
      return null;
    }

    const hashedToken = hashToken(refreshToken);

    if (hashedToken !== savedRefreshToken.hashedToken) {
      return null;
    }

    const user = await getUserByID(payload.userId);

    if (!user) {
      return null;
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

    return {
      accessToken,
      refreshToken: newRefreshToken,
    };
  } catch (err) {
    console.error("Auth refresh token err" + err);

    return null;
  }
};
