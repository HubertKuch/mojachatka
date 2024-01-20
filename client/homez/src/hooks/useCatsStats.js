const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

function useCatsStats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    OffersControllers.getCats().then(setCats);
  }, []);

  return cats;
}

export default useCatsStats;
