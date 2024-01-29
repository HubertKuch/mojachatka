const Faq1 = () => {
  const faqItems = [
    {
      id: "headingOne",
      question: "Jak dodać ogłoszenie?",
      answer:
        "Aby dodać ogłoszenie należy dokonać zakupu odpowiedniego pakietu, a następnie kliknij w prawym górnym rogu strony, Dodaj ogłoszenie. Opcję dodania ogłoszenia znajdziesz także na swoim proflu w zakładce Ogłoszenia, Dodaj ofertę.",
    },
    {
      id: "headingTwo",
      question:
        "Jak działają promowania ogłoszeń oraz jaka jest różnica pomiędzy podbiciem, a podbiciem na stronę główną?",
      answer:
        "Promowanie ogłoszeń polega na ulepszeniu pozycjonowania danej oferty przez określony okres czasu. Mojachatka oferuje dwa rodzaje podbić. Pierwsze to zwykłe podbicie, dzięki któremu ogłoszenie zostaje wyświetlone w pierwszych trzech ofertach w danym mieście, co pozwala na zwiększenie zainteresowania. Natomiast drugim rodzajem podbicia jest podbicie na stronę główną. Promowanie to polega na wyświetleniu podbitego ogłoszenia na stronie głównej spośród sześciu podbitych ofert.",
    },
    {
      id: "headingThree",
      question: "W jaki sposób mogę skontaktować się z obsługą portalu?",
      answer:
        "Oferujemy dwie możliwości kontaktu z obsługą mojejchatki, poprzez numer telefonu - 789 857 202 lub poprzez maila - pomoc@mojachatka.pl ",
    },
    {
      id: "headingFour",
      question: "Czy ceny podane w cenniku są ostateczne?",
      answer:
        "Tak, ceny w cenniku są ostateczne. Nie posiadamy żadnych ukrytych opłat.",
    },
  ];

  return (
    <div className="accordion" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={item.id}>
            <button
              className={`accordion-button ${index === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index + 1}`}
              aria-expanded={index === 2 ? "true" : "false"}
              aria-controls={`collapse${index + 1}`}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`collapse${index + 1}`}
            className={`accordion-collapse collapse ${index === 2 ? "" : ""}`}
            aria-labelledby={item.id}
            data-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
      <p>Wszystkie z podanych cen są cenami brutto.</p>
    </div>
  );
};

export default Faq1;
