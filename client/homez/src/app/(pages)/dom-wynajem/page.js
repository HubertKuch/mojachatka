import ListV1 from "@/app/(listing)/(list-view)/oferty/page";

export const metadata = {
  title: "Domy na wynajem | Ogłoszenia Mojachatka.pl",
  description:
    "Domy na wynajem w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  return <ListV1 sellType={"RENT"} type={"DOM"} />;
}
