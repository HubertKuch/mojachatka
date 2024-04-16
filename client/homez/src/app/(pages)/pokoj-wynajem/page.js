import ListV1 from "@/app/(listing)/(list-view)/oferty/page";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Pokoje na wynajem | Ogłoszenia Mojachatka.pl",
  description:
    "Pokoje na wynajem w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  return <ListV1 sellType={"RENT"} type={"POKOJ"} />;
}
