const expect = require("expect.js");
const mockDatabase = require("./utils/mockDatabase");
const proxyquire = require("proxyquire");
const dayjs = require("dayjs");
const ExpiredOffersTreatment = proxyquire(
  "../services/ExpiredOffersTreatment",
  { "../utils/db": { db: mockDatabase } },
);
const OffersService = proxyquire("../services/OffersService", {
  "../utils/db": {
    db: mockDatabase,
  },
});

describe("Offers", async () => {
  it("Should return a offer by id", async () => {
    const randomOffer = await mockDatabase.offers.findFirst();
    const offer = await OffersService.getById(randomOffer.id);

    expect(offer).to.not.be(null);
  });

  it("Should return user offers", async () => {
    const user = await mockDatabase.user.findFirst();
    const offers = await OffersService.getUserOffers(user.id, { all: true });

    expect(offers.length).to.not.be(0);
    expect(offers[0].title).to.not.be(null);
  });

  it("Should delete expired offer", async () => {
    const offersBefore = await mockDatabase.offers.findMany({
      where: { expires: dayjs().isBefore(new Date()) },
      select: { id: true },
    });

    await ExpiredOffersTreatment.delete();

    const offersAfter = await mockDatabase.offers.findMany({
      where: { id: { in: offersBefore.map((o) => o.id) } },
    });

    expect(offersAfter.every((o) => o.deleted)).ok();
  });
});
