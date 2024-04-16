const fs = require("fs/promises");
const path = require("path");

(async () => {
  const cities = JSON.parse(
    await fs.readFile(path.join(__dirname, "cities.json"), "utf8"),
  );
  const types = [
    "dom",
    "mieszkanie",
    "garaz",
    "lokal",
    "dzialka",
    "pokoj",
    "magazyn",
  ];
  const sellTypes = ["wynajem", "sprzedaż"];
  const dirNames = [];

  for (const sellType of sellTypes) {
    for (const type of types) {
      for (const city of cities) {
        const name = `${city.toLowerCase().replaceAll(", ", "-").replace(" ", "-")}-${sellType}-${type}`;

        dirNames.push({ city, name, type, sellType });
      }
    }
  }

  for (const dirname of dirNames) {
    const content = `
import ListV1 from "@/app/(listing)/(list-view)/oferty/page";

export const metadata = {
  title: "${dirname.type} na ${dirname.sellType} | Ogłoszenia Mojachatka.pl",
  description:
    "${dirname.type} na ${dirname.sellType} w ${dirname.city} w Mojachatka.pl. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów.",
};

export default function RedirectToMain() {
	return <ListV1 location="${dirname.city}" type={"${dirname.type.toUpperCase()}"} sellType={"${dirname.sellType === "wynajem" ? "RENT" : "BUY"}"} />;
}
		`;

    try {
      await fs.mkdir(path.join(__dirname, `./cities-pages/${dirname.name}`));
    } catch (e) {}
    await fs.writeFile(
      path.join(__dirname, `./cities-pages/${dirname.name}/page.js`),
      content,
      { encoding: "utf8" },
    );
  }
})();
