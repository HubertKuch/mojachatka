import ListV1 from "@/app/(listing)/(list-view)/oferty/page";

export const metadata = {
  title: "Mieszkania na wynajem | Ogłoszenia Mojachatka.pl",
  description:
    "Mieszkania na wynajem w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  return <ListV1 type={"MIESZKANIE"} sellType={"RENT"} />;
}
