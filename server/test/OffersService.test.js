const expect = require('expect.js');
const mockDatabase = require('./utils/mockDatabase');
const proxyquire = require('proxyquire');
const OffersService = proxyquire("../services/OffersService", {
  "../utils/db": {
    db: mockDatabase
  }
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
});


