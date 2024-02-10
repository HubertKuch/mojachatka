const { UserType, Role, Region } = require("@prisma/client");
const { db } = require("../utils/db.js");
const { faker, fakerPL } = require("@faker-js/faker");
const bcrypt = require("bcrypt");
const cities = require("../data/cities.json");
const kities = require("./kittes.json");

const usersAmount = 100;
const offersPerUsersAmount = 5;

function getRandomFromArray(array) {
  return array[faker.number.int({ min: 0, max: array.length - 1 })];
}

async function randomHouseOffer(user) {
  await db.offers.create({
    data: {
      type: "DOM",
      title: fakerPL.word.sample({ length: { min: 4, max: 6 } }),
      description: fakerPL.word.sample({ length: { min: 120, max: 600 } }),
      price: faker.number.int({ min: 40000, max: 95000000 }),
      sellType: "BUY",
      expires: faker.date.future({ years: 1 }),
      User: { connect: { id: user.id } },
      authorName: user.firstName,
      createdOnIp: faker.internet.ipv4(),
      properties: {
        images: kities,
        address: {
          region: getRandomFromArray(Region),
          city: getRandomFromArray(cities),
          zipCode: fakerPL.location.zipCode(),
          address: fakerPL.location.streetAddress(),
        },
        house: {
          buildYear: `${faker.date.past().getFullYear()}`,
          developmentType: "DETACHED",
          material: "BRICK",
          windows: "PLASTIC",
          condition: "FORRESIDENCE",
          roof: "NO",
          attic: "NONE",
          roofing: "SHEETMETAL",
          location: "CITY",
          availableFrom: "zaraz",
          fence: "BRICK",
          heating: "COAL",
          roadAccess: "FIELD",
          primaryMarket: true,
          houseArea: 400,
          plotArea: 400,
          rooms: {
            total: 10,
            bedrooms: faker.number.int({ max: 4 }),
            bathrooms: faker.number.int({ max: 10 }),
          },
        },
      },
    },
  });
}

(async () => {
  for (let i = 1; i <= 0; i++) {
    const type = getRandomFromArray(Object.values(UserType));

    const user = await db.user.create({
      data: {
        type: type,
        email: fakerPL.internet.email(),
        firstName: fakerPL.person.firstName(),
        lastName: fakerPL.person.lastName(),
        role: getRandomFromArray(["USER", "ADMIN"]),
        password: bcrypt.hashSync("123", 12),
        telephone: fakerPL.phone.number(),
        activated: true,
      },
      select: { id: true },
    });

    if (type !== "INDIVIDUAL") {
      const company = await db.company.create({
        data: {
          user: { connect: { id: user.id } },
          nip: faker.string.numeric(14),
          name: fakerPL.company.name(),
          house: fakerPL.string.numeric({ length: { min: 1, max: 40 } }),
          regon: faker.string.numeric(14),
          address: fakerPL.location.streetAddress(),
          license: fakerPL.string.numeric(14),
          zipCode: fakerPL.location.zipCode(),
        },
      });

      await db.user.update({
        data: { Company: { connect: { id: company.id } } },
        where: { id: user.id },
      });
    }
  }

  const users = await db.user.findMany({
    select: { id: true, firstName: true },
  });

  for (const user of users) {
    for (let i = 0; i < offersPerUsersAmount; i++) {
      await randomHouseOffer(user);
    }
  }
})();
