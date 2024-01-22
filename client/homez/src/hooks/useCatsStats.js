const {
  default: OffersControllers,
} = require("@/controllers/OffersController");
const { useState, useEffect } = require("react");

function useCatsStats() {
  const [cats, setCats] = useState([]);

  const ICON_BY_TYPE = {
    DOM: "flaticon-home",
    GARAZ: "flaticon-garage",
    LOKAL: "flaticon-corporation",
    MIESZKANIE: "flaticon-network",
    MAGAZYN: "flaticon-home-3",
    POKOJ: "flaticon-chat",
    DZIALKA: "flaticon-garden",
  };

  const ALIAS_BY_TYPE = {
    DOM: "Dom",
    GARAZ: "Garaż",
    LOKAL: "Lokal użytkowy",
    MIESZKANIE: "Mieszkanie",
    MAGAZYN: "Magazyn",
    POKOJ: "Pokój",
    DZIALKA: "Działka",
  };

  useEffect(() => {
    OffersControllers.getCats().then(setCats);
  }, []);

  return { cats, iconByType: ICON_BY_TYPE, aliases: ALIAS_BY_TYPE };
}

export default useCatsStats;
