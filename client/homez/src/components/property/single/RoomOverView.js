const {
  default: OverView,
} = require("../property-single-style/common/OverView");

function RoomOverView({ offer }) {
  const overviewData = [
    {
      icon: "flaticon-home-1",
      label: "Typ nieruchomosci",
      value: offer?.type,
    },
    {
      icon: "flaticon-home",
      label: "Ilosc osob w pokoju",
      value: offer?.properties?.room?.personsInRoom,
    },
  ];

  return <OverView overviewData={overviewData} />;
}

export default RoomOverView;
