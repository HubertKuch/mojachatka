"use client";

import MainMenu from "@/components/common/MainMenu";
import SidebarPanel from "@/components/common/sidebar-panel";
import LoginSignupModal from "@/components/common/login-signup-modal";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const user = useUser({ reload: true });

  useEffect(() => {
    if (user) setLoggedIn(true);
  }, [user]);

  const changeBackground = () => {
    if (window?.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window?.addEventListener("scroll", changeBackground);
    return () => {
      window?.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={`header-nav nav-homepage-style main-menu  ${
          navbar ? "sticky slideInDown animated" : ""
        }`}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos mr40">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={200}
                        height={44}
                        src="/images/header-logo.svg"
                        title="nieruchomości"
                        alt="Mojachatka nieruchomości - Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        width={200}
                        height={44}
                        src="/images/header-logo2.svg"
                        title="nieruchomości"
                        alt="Mojachatka nieruchomości - Logo"
                      />
                    </Link>
                  </div>
                  {/* End Logo */}

                  <MainMenu />
                  {/* End Main Menu */}
                </div>
              </div>
              {/* End .col-auto */}

              <div className="col-auto">
                <div className="d-flex align-items-center">
                  {isLoggedIn ? (
                    <Link
                      href={"/dashboard-home"}
                      className="login-info d-flex align-items-center"
                    >
                      <i className="far fa-user-circle fz16 me-2" />{" "}
                      <span className="d-none d-xl-block">{`Witaj ${user?.username}`}</span>
                    </Link>
                  ) : (
                    <a
                      href={"#"}
                      className="login-info d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#loginSignupModal"
                      role="button"
                    >
                      <i className="far fa-user-circle fz16 me-2" />{" "}
                      <span className="d-none d-xl-block">
                        {"Logowanie / Rejestracja"}
                      </span>
                    </a>
                  )}
                  <Link
                    className="ud-btn add-property menu-btn bdrs60 mx-2 mx-xl-4"
                    href="/dashboard-add-property"
                  >
                    Dodaj ogłoszenie
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                  <a
                    className="sidemenu-btn filter-btn-right"
                    href="#"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#SidebarPanel"
                    aria-controls="SidebarPanelLabel"
                  ></a>
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}
          </div>
        </nav>
      </header>
      {/* End Header */}

      {/* Signup Modal */}
      <div className="signup-modal">
        <div
          className="modal fade"
          id="loginSignupModal"
          tabIndex={-1}
          aria-labelledby="loginSignupModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
            <LoginSignupModal />
          </div>
        </div>
      </div>
      {/* End Signup Modal */}

      {/* DesktopSidebarMenu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="SidebarPanel"
        aria-labelledby="SidebarPanelLabel"
      >
        <SidebarPanel />
      </div>
      {/* Sidebar Panel End */}
    </>
  );
};

export default Header;
