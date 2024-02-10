import useRegion from "@/hooks/useRegion";
import ReactSelect from "react-select";

export default function ProvinceSelect({ filters }) {
  const regions = useRegion();

  return (
    <ReactSelect
      placeholder="Region"
      menuPosition="absolute"
      onChange={(value) => {
        if (!value) {
          return delete filters.region;
        }

        filters.region = value?.value;
      }}
      options={regions}
      isClearable
    />
  );
}
