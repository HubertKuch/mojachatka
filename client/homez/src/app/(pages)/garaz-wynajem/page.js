import { redirect } from "next/navigation";

export const metadata = {
  title: "Garaże na wynajem | Ogłoszenia Mojachatka.pl",
  description:
    "Garaże na wynajem w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
  redirect("/");
  return <></>;
}
