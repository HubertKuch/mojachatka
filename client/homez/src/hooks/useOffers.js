const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

const useOffers = (query) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (query.random && query.type) {
      OffersControllers.getRandom(query.type).then(setOffers);
    } else {
      OffersControllers.findAll(query).then((res) =>
        setOffers(res.offers.data),
      );
    }
  }, [query]);

  return offers;
};

module.exports = useOffers;
