import Select from "react-select";
import useSellType from "@/hooks/useSellType";

export default function SellTypesSelect({ set, filters, onChange }) {
  const sellTypes = useSellType();

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
            ? "#eb675312"
            : isFocused
              ? "#eb675312"
              : undefined,
      };
    },
  };

  return (
    <Select
      defaultValue={sellTypes[0]}
      name="sellType"
      onChange={(e) => {
        if (filters) filters.sellType = e.value;

        if (set) set(e.value);

        if (onChange) onChange("sellType")(e.value);
      }}
      options={[
        { label: "Najm", value: "RENT" },
        { label: "Sprzedaż", value: "BUY" },
      ]}
      styles={customStyles}
      className="select-custom pl-0"
      classNamePrefix="select"
      required
    />
  );
}
