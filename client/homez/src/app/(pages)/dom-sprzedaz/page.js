import { redirect } from "next/navigation";

export const metadata = {
  title: "Domy na sprzedaż | Ogłoszenia Mojachatka.pl",
  description:
    "Domy na sprzedaż w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  redirect("/");
  return <></>;
}
