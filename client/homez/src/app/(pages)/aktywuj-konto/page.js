"use client";

import AuthController from "@/controllers/AuthController";
import { useSearchParams } from "next/navigation";

const ActiveAccount = () => {
  const params = useSearchParams();

  const email = params.get("email");
  const code = params.get("code");

  if (email || code) {
    AuthController.activateAccount(email, code).then((res) => {
      window?.location?.replace("/");
    });
  }

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
              <h1>Dziekujemy za rejestracje</h1>
              <p className="f14">
                Dziękujemy za rejestrację na naszym portalu ogłoszeniowym -
                mojachatka! Cieszymy się, że dołączyłeś/dołączyłaś do naszej
                społeczności.
              </p>
            </div>
          </div>
          <div className="row">
            <p className="f14">
              Na Twojego maila zostal wyslany link aktywacyjny
            </p>
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

export default ActiveAccount;
