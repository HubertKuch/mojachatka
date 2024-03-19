import { Helmet } from "react-helmet";

const Wrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        {" "}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>
          Nieruchomości ogłoszenia - sprzedaż i wynajem - Cała Polska
        </title>
        <meta
          name="description"
          content="Nieruchomości ogłoszenia na sprzedaż i na wynajem. Sprawdź wszystkie ogłoszenia nieruchomości od osób prywatnych, agencji nieruchomości oraz deweloperów."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {children}
    </>
  );
};

export default Wrapper;
