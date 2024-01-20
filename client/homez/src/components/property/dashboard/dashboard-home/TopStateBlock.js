import React from "react";

const TopStateBlock = ({ user, stats }) => {
  console.log(user);
  const statisticsData = [
    {
      text: "Oferty",
      title: user?.offers?.length,
      icon: "flaticon-home",
    },

    {
      text: "Wyswietlen",
      title: stats?.views?.total || 0,
      icon: "flaticon-search-chart",
    },
    {
      text: "Pozostalych ofert",
      title: user?.listings,
      icon: "flaticon-home",
    },
    {
      text: "Pozostale podbicia na glowna",
      title: user?.UserBoosts?.filter(
        (b) =>
          b.properties.properties?.properties?.boostType === "MAIN" &&
          !b.properties.properties?.used,
      ).length,
      icon: "fa-solid fa-globe",
    },
    {
      text: "Pozostale podbicia na liste",
      title: user?.UserBoosts?.filter(
        (b) =>
          b.properties.properties?.properties?.boostType === "GLOBAL" &&
          !b.properties.properties?.used,
      ).length,
      icon: "fa-solid fa-globe",
    },
  ];

  return (
    <>
      {statisticsData.map((data, index) => (
        <div key={index} className="col-sm-6 col-xxl-4">
          <div className="d-flex justify-content-between statistics_funfact">
            <div className="details">
              <div className="text fz25">{data.text}</div>
              <div className="title">{data.title}</div>
            </div>
            <div className="icon text-center">
              <i className={data.icon} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopStateBlock;
