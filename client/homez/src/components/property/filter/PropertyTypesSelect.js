import ApplicationSelect from "@/components/customs/ApplicationSelect";
import usePropertyTypes from "@/hooks/usePropertyType";
import { useFormikContext } from "formik";
import Select from "react-select";

export default function PropertyTypesSelect({
  filters,
  className,
  onChange,
  defaultOptionValue,
}) {
  const propertyTypes = usePropertyTypes();
  const formik = useFormikContext();

  const types = [
    {
      value: "DOM",
      label: "Dom",
    },
    {
      value: "MIESZKANIE",
      label: "Mieszkanie",
    },
    {
      value: "DZIALKA",
      label: "Działka",
    },
    {
      value: "GARAZ",
      label: "Garaż",
    },
    {
      value: "POKOJ",
      label: "Pokój",
    },
    {
      value: "LOKAL",
      label: "Lokal użytkowy",
    },
    {
      value: "MAGAZYN",
      label: "Magazyn",
    },
  ];

  return (
    <ApplicationSelect
      name={"type"}
      label={"Typ"}
      defaultOptionValue={defaultOptionValue}
      onChange={({ value }) => {
        if (filters) filters.type = value;

        if (onChange) onChange("type")(value);
      }}
      options={types}
    />
  );

  return (
    <Select
      classNames={className}
      styles={{
        menu: (prov) => ({ ...prov, zIndex: 99999999 }),
        menuList: (prov) => ({ ...prov, zIndex: 99999999 }),
      }}
      onChange={({ value }) => {
        if (filters) filters.type = value;

        if (onChange) onChange("type")(value);
      }}
      isSearchable={false}
      defaultValue={[propertyTypes[1]]}
      name="type"
      placeholder="Typ"
      menuPosition="absolute"
      options={types}
      className="select-custom pl-0"
      classNamePrefix="select"
      required
    />
  );
}
