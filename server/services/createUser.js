const bcrypt = require("bcrypt");
const { db } = require("../utils/db");

function createUser(user) {
  user.password = bcrypt.hashSync(user.password, 12);
  user.activated = true;
  return db.user.create({
    data: user,
  });
}

module.exports = { createUser };
