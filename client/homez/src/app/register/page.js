import SignUp from "@/components/common/login-signup-modal/SignUp";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <>
      {/* Our Compare Area */}
      <section className="our-compare pt60 pb60">
        <Image
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
          }}
          width={1024}
          height={100}
          src="/images/icon/login-page-icon.svg"
          ast="logo"
          className="login-bg-icon contain"
          data-aos="fade-right"
          data-aos-delay="300"
        />
        <div className="container" style={{ minHeight: "80vh" }}>
          <div
            className="row"
            style={{ minHeight: "100%" }}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div
              className="col-lg-6"
              style={{ position: "relative", left: "25%", minHeight: "100%" }}
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
