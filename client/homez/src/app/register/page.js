import SignUp from "@/components/common/login-signup-modal/SignUp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Rejestracja  || Mojachatka: Nieruchomości, Domy, Mieszkania, Działki",
};

const Register = () => {
  return (
    <>
      {/* Our Compare Area */}
      <section className="our-compare pt60 pb60">
        <Image
          style={{
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            position: "absolute",
          }}
          width={1024}
          height={100}
          src="/images/icon/login-page-icon.svg"
          ast="logo"
          className="login-bg-icon contain"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <div className="container">
          <div className="row" data-aos="fade-left" data-aos-delay="300">
            <div
              className="col-lg-6"
              style={{ position: "relative", left: "25%" }}
            >
              <div className="log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12">
                <div className="text-center mb40">
                  <Link href="/">
                    <Image
                      width={138}
                      height={44}
                      className="mb25"
                      src="/images/header-logo2.svg"
                      alt="logo"
                    />
                  </Link>
                  <h2>Stwórz konto</h2>
                </div>
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
