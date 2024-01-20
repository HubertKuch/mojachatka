const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

const useOffers = (query) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    if (query.random && query.type) {
      return () => {
        OffersControllers.getRandom(query.type).then(setOffers);
      };
    } else {
      return async () => {
        setOffers((await OffersControllers.findAll(query)).offers.data);
      };
    }
  }, [query]);

  return offers;
};

module.exports = useOffers;
