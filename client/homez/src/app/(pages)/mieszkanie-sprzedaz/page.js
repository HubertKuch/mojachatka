import ListV1 from "@/app/(listing)/(list-view)/oferty/page";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Mieszkania na sprzedaż | Ogłoszenia Mojachatka.pl",
  description:
    "Mieszkania na sprzedaż w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  return <ListV1 sellType={"BUY"} type={"MIESZKANIE"} />;
}
