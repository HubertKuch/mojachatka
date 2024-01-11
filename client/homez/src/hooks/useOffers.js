const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

const useOffers = (query) => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    return async () => {
      setOffers((await OffersControllers.findAll(query)).offers.data);
    };
  }, []);

  return offers;
};

module.exports = useOffers;
