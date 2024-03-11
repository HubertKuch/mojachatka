import { Helmet } from "react-helmet";

const Wrapper = ({ children }) => {
  return (
    <>
      <Helmet>
        {" "}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Mojachatka: Nieruchomości, Domy, Mieszkania, Działki</title>
        <meta
          name="description"
          content="Najtańszy portal ogłoszeniowy. Nieruchomości, sprzedaż, kupno, wynajem. Mieszkania, domy, działki i więcej."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {children}
    </>
  );
};

export default Wrapper;
