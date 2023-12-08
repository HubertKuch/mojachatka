const { UserType } = require('@prisma/client');
const { db } = require('../utils/db');

class AccountPacketsService {
  static async getByUserType(userType) {
    if (!Object.values(UserType).includes(userType)) {
      throw new Error("Unknown user type");
    }

    return await db.accountPackets.findMany({
      where: {
        properties: {
          path: "$.allowedFor",
          array_contains: userType
        }
      }
    });
  }
}

module.exports = AccountPacketsService;
