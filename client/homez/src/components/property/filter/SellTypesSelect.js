import Select from "react-select";
import useSellType from "@/hooks/useSellType";
import ApplicationSelect from "@/components/customs/ApplicationSelect";

export default function SellTypesSelect({
  set,
  filters,
  onChange,
  defaultOptionValue,
}) {
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
    <ApplicationSelect
      name={"sellType"}
      label={"Rodzaj"}
      defaultOptionValue={
        defaultOptionValue
          ? defaultOptionValue
          : { label: "Wynajem", value: "RENT" }
      }
      onChange={({ selectedItem }) => {
        if (filters) filters.sellType = selectedItem.value;

        if (set) set(selectedItem.value);

        if (onChange) onChange("sellType")(selectedItem.value);
      }}
      options={[
        { label: "Wynajem", value: "RENT" },
        { label: "Sprzedaż", value: "BUY" },
      ]}
    />
  );

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
        { label: "Wynajem", value: "RENT" },
        { label: "Sprzedaż", value: "BUY" },
      ]}
      styles={customStyles}
      className="select-custom pl-0"
      classNamePrefix="select"
      required
    />
  );
}
