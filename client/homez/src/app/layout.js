"use client";

import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import { DM_Sans, Poppins } from "next/font/google";
import { useEffect } from "react";
import Head from "next/head";

if (typeof window !== "undefined") {
  import("bootstrap");
  window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="pl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Mojachatka: Nieruchomości, Domy, Mieszkania, Działki</title>
        <meta
          name="description"
          content="Najtańszy portal ogłoszeniowy. Nieruchomości, sprzedaż, kupno, wynajem. Mieszkania, domy, działki i więcej."
        />
        <meta name="robots" content="all" />
      </head>{" "}
      <body
        className={`body  ${poppins.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">{children}</div>

        <ScrollToTop />
      </body>
    </html>
  );
}
