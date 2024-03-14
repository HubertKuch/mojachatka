import { redirect } from "next/navigation";

export const metadata = {
  title: "Pokoje na wynajem | Ogłoszenia Mojachatka.pl",
  description:
    "Pokoje na wynajem w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  redirect("/");
  return <></>;
}
