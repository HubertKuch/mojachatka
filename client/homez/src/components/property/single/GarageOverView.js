const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function GarageOverView({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia dzialki",
      value: offer?.properties?.garage?.sizeInMeters + "m2",
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default GarageOverView;
