const jwt = require("jsonwebtoken");

// Usually I keep the token between 5 minutes - 15 minutes
function generateAccessToken(user) {
  delete user.password;
  return jwt.sign({ data: user }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "2d",
  });
}

function generateRefreshToken(user, jti) {
  return jwt.sign(
    {
      userId: user.id,
      jti,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: "8h",
    },
  );
}

function generateTokens(user, jti) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user, jti);

  return {
    accessToken,
    refreshToken,
  };
}

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateTokens,
};
