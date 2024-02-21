import numberFormat from "../../utils/numberFormat";

export default function Statistics() {
  const stats = [
    { name: "Liczba ogloszen", value: 421424 },
    { name: "Liczba uzytkownikow", value: 4218424 },
    { name: "Liczba administratorow", value: 4218424 },
    { name: "Przychod", value: 421424 },
  ];

  return (
    <div className={`grid grid-cols-4 rounded-x p-10`}>
      {stats.map(({ name, value }, index) => (
        <div
          className={`bg-[#111827] p-10 border-l-neutral-700 border-l-2 ${index === 0 ? "rounded-bl-xl rounded-tl-xl" : ""} ${index === stats.length - 1 ? "rounded-br-xl rounded-tr-xl " : ""}`}
        >
          <div className="text-[#79808c] text-lg">{name}</div>
          <div className="text-[#ffffff] mt-3 text-3xl font-bold">
            {numberFormat(value, { currency: true })}
          </div>
        </div>
      ))}
    </div>
  );
}
