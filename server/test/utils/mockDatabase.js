const { PrismockClient } = require("prismock");
const client = new PrismockClient();
const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");
// MAN MAIN
(async () => {
  for (let i = 0; i <= 100; i++) {
    const user = await client.user.create({
      data: {
        type: "INDIVIDUAL",
        email: faker.internet.email(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        listings: faker.number.int(1, 20),
        phoneNumber: faker.phone.number(),
      },
    });

    for (let i = 0; i <= faker.number.int({ min: 1, max: 20 }); i++) {
      await client.offers.create({
        data: {
          type: "DOM",
          city: faker.location.city(),
          price: faker.number.int(1000, 40000),
          region: "LODZKIE",
          description: faker.lorem.words({ min: 200, max: 1200 }),
          title: faker.lorem.words({ min: 4, max: 12 }),
          properties: {},
          User: user,
          expires:
            i >= 5
              ? dayjs().subtract(30, "days").toDate()
              : dayjs().add(30, "days").toDate(),
          deleted: false,
          author: user.id,
        },
      });
    }
  }
})();

module.exports = client;
