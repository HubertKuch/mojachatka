"use client";
import ReactShowMoreText from "react-show-more-text";
import Home_V1 from "./(home)/home-v1/page";
import Wrapper from "./layout-wrapper/wrapper";
import Link from "next/link";
import { useEffect, useState } from "react";

function CookiePopup({ setHasPopup }) {
  return (
    <div className="cookie row gy-10 gx-10">
      <div className="row" style={{ fontSize: "1.5rem" }}>
        <div className="col">Ciasteczka</div>
      </div>
      <div className="row">
        <div className="col">
          <ReactShowMoreText lines={2} more="Pokaż więcej" less="Pokaż mniej">
            Ta strona internetowa korzysta z plików cookies w celu świadczenia
            usług na najwyższym poziomie. Dalsze korzystanie ze strony oznacza,
            że zgadzasz się na ich użycie. W każdym momencie możesz dokonać
            zmiany ustawień dotyczących cookies w przeglądarce internetowej.
            Więcej informacji na ten temat znajdziesz w naszej{" "}
            <Link href={"/regulamin"}>Polityce Prywatności.</Link>
          </ReactShowMoreText>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            className="btn cookie-button"
            onClick={() => {
              setHasPopup(false);
              localStorage.setItem(
                "cookies",
                JSON.stringify({ accepted: true }),
              );
            }}
          >
            Akceptuj
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MainRoot() {
  const [hasPopup, setHasPopup] = useState(false);

  useEffect(() => {
    setHasPopup(!JSON.parse(localStorage.getItem("cookies") || "{}")?.accepted);
  });

  return (
    <Wrapper>
      <Home_V1 />
      {hasPopup && <CookiePopup setHasPopup={setHasPopup} />}
    </Wrapper>
  );
}
