import { NextResponse, NextRequest } from "next/server";
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == "/sprzedaz") {
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991",
    );
  } else if (pathname === "/wynajem") {
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991",
    );
  } else if (pathname === "/dom-sprzedaz") {
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991&type=DOM",
    );
  } else if (pathname === "/mieszkanie-sprzedaz") {
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991&type=MIESZKANIE",
    );
  } else if (pathname === "/dzialka-sprzedaz")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991&type=DZIALKA",
    );
  else if (pathname === "/lokal-uzytkowy-sprzedaz")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991&type=LOKAL",
    );
  else if (pathname === "/magazyn-sprzedaz")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991&type=MAGAZYN",
    );
  else if (pathname === "/dom-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=DOM",
    );
  else if (pathname === "/mieszkanie-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=MIESZKANIE",
    );
  else if (pathname === "/dzialka-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=DZIALKA",
    );
  else if (pathname === "/garaz-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=GARAZ",
    );
  else if (pathname === "/pokoj-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=POKOJ",
    );
  else if (pathname === "/lokal-uzytkowy-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=LOKAL",
    );
  else if (pathname === "/magazyn-wynajem")
    return NextResponse.redirect(
      "https://mojachatka.pl/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=MAGAZYN",
    );

  return NextResponse.next();
}
