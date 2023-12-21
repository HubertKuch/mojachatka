const {
  default: StatisticsController,
} = require("@/controllers/StatisticsController");
const { useState, useEffect } = require("react");

const useStatistics = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    return () => {
      StatisticsController.getStatistics().then(setStats);
    };
  }, []);

  return stats;
};

export default useStatistics;
