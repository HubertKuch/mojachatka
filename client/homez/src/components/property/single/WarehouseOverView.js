const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function WareHouseOverView({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Wysokość (w metrach)",
      value: offer?.properties?.warehouse?.heightInMeters,
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default WareHouseOverView;
