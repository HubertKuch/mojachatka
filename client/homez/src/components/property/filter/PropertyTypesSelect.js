import usePropertyTypes from "@/hooks/usePropertyType";
import Select from "react-select";

export default function PropertyTypesSelect({ filters, className }) {
  const propertyTypes = usePropertyTypes();

  return (
    <Select
      classNames={className}
      styles={{
        menu: (prov) => ({ ...prov, zIndex: 99999999 }),
        menuList: (prov) => ({ ...prov, zIndex: 99999999 }),
      }}
      onChange={({ value }) => {
        filters.type = value;
      }}
      defaultValue={[propertyTypes[1]]}
      name="type"
      menuPosition="fixed"
      options={propertyTypes}
      className="select-custom pl-0"
      classNamePrefix="select"
      required
    />
  );
}
