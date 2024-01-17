"use client";

const PaymentAccepted = () => {
  return (
    <>
      <section className="breadcumb-section bgc-f7" style={{ height: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src="/images/header-logo2.svg" />
            </div>
          </div>
          <div className="row " style={{ marginTop: "2rem" }}>
            <div className="col">
              <h1>Dziekujemy za zakupienie pakietu</h1>
              <p className="f14">
                Zawartosc kupionego pakietu pojawi sie na Twoim koncie w
                przeciagu paru minut!
              </p>
            </div>
          </div>
          <div className="row">
            <a className="btn btn-outline-primary" href="/">
              Powrot
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentAccepted;
