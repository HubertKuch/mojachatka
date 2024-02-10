const { db } = require("../utils/db");

async function getUserByID(id) {
  try {
    return await db.user.findFirst({
      where: {
        id,
      },
      include: { offers: { where: { deleted: false } }, UserBoosts: true },
    });
  } catch (err) {
    console.error(err);
    return "User not Found";
  }
}

async function GetUserByEmail(email) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

async function getAllUsers() {
  return db.user.findMany();
}

module.exports = {
  getAllUsers,
  getUserByID,
  GetUserByEmail,
};
