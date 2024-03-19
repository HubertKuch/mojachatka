import { redirect } from "next/navigation";

export const metadata = {
  title: "Działki na sprzedaż | Ogłoszenia Mojachatka.pl",
  description:
    "Działki na sprzedaż w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  redirect(
    "/oferty?sellType=BUY&minPrice=0&maxPrice=9007199254740991&type=DZIALKA",
  );
  return <></>;
}
