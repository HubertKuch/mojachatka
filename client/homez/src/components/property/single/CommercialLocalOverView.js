const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function CommercialLocalOverView({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Piętro",
      value: offer?.properties?.commercialLocal?.floor,
    },
    {
      icon: "flaticon-home",
      label: "Powierzchnia",
      value: offer?.properties?.commercialLocal?.area,
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default CommercialLocalOverView;
