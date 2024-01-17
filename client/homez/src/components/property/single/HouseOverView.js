const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function HouseOverview({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia dzialki",
      value: offer?.properties?.house?.plotArea + "m2",
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia domu",
      value: offer?.properties?.house?.houseArea + "m2",
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default HouseOverview;
