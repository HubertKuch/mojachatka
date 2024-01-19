const Mission = () => {
  const missionData = [
    {
      icon: "flaticon-garden",
      title: "Polski kapitał",
      description: "Firma opiera się w 100% na polskim kapitale.",
    },
    {
      icon: "flaticon-secure-payment",
      title: "Bezpieczeństwo",
      description:
        "Każda płatność oraz konto jest zabezpieczone w najwyższym stopniu.",
    },
  ];

  return (
    <>
      {missionData.map((item, index) => (
        <div className="col-sm-6" key={index}>
          <div className="why-chose-list style3">
            <div className="list-one mb30">
              <span className={`list-icon flex-shrink-0 ${item.icon} mb20`} />
              <div className="list-content flex-grow-1">
                <h6 className="mb-1">{item.title}</h6>
                <p className="text mb-0 fz14">
                  {item.description} <br className="d-none d-sm-block" />
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Mission;
