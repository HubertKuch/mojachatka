import ListV1 from "@/app/(listing)/(list-view)/oferty/page";

export const metadata = {
  title: "Domy na sprzedaż | Ogłoszenia Mojachatka.pl",
  description:
    "Domy na sprzedaż w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  return <ListV1 params={{ type: "DOM", sellType: "BUY" }} />;
}
