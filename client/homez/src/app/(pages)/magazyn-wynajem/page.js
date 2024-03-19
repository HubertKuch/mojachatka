import { redirect } from "next/navigation";

export const metadata = {
  title: "Magazyny na wynajem | Ogłoszenia Mojachatka.pl",
  description:
    "Magazyny na wynajem w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  redirect(
    "/oferty?sellType=RENT&minPrice=0&maxPrice=9007199254740991&type=MAGAZYN",
  );
  return <></>;
}
