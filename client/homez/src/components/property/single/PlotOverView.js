const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function PlotOverView({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia dzialki",
      value: offer?.properties?.plot?.sizeInMeters + "m2",
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default PlotOverView;
