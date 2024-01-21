const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

db.$use(async (params, next) => {
  if (params.model === "Offers") {
    if (params.action === "findFirst" || params.action === "findUnique") {
      params.action = "findFirst";

      params.args.where["deleted"] = false;
    }

    if (params.action === "findMany") {
      if (params.args.where) {
        if (params.args.where.deleted == undefined) {
          params.args.where["deleted"] = false;
        }
      } else {
        params.args["where"] = { deleted: false };
      }
    }
  }

  return next(params);
});

module.exports = { db };
