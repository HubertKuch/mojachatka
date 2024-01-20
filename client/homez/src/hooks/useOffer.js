const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

const useOffer = (id) => {
  const [offer, setOffer] = useState({});

  useEffect(() => {
    return async () => {
      setOffer(await OffersControllers.findOneById(id));
    };
  }, [id]);

  return offer;
};

module.exports = useOffer;
