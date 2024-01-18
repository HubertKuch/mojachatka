const {
  default: BoostingController,
} = require("@/controllers/BoostingController");
const { useState, useEffect } = require("react");

function useBoosts() {
  const [boosts, setBoosts] = useState([]);

  useEffect(() => {
    BoostingController.getAllBoosts().then(setBoosts);
  }, []);

  return boosts;
}

export default useBoosts;
