const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function ApartmentOverview({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia",
      value: offer?.properties?.apartment?.area + "m2",
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default ApartmentOverview;
