const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

const useOffer = (id) => {
  const [offer, setOffer] = useState({});

  useEffect(() => {
    OffersControllers.findOneById(id).then(setOffer);
  }, [id]);

  return offer;
};

module.exports = useOffer;
