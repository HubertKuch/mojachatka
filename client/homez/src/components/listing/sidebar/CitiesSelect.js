import OffersControllers from "@/controllers/OffersController";
import ReactSelect from "react-select";

export default function CitiesSelect({ cities, setCities, filters }) {
  return (
    <ReactSelect
      menuPlacement="auto"
      menuPosition="fixed"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          minWidth: "100%",
        }),
        container: (base) => ({ ...base, width: "100%" }),
      }}
      isClearable
      onChange={(val) => {
        if (!val) {
          return delete filters.city;
        }
        filters.city = val.value;
      }}
      onInputChange={(val) => {
        if (val.length <= 2) {
          return;
        }

        OffersControllers.getCities(val).then((res) => {
          if (res?.data?.cities) {
            setCities(
              res.data.cities.map((city) => ({
                value: city,
                label: city,
              })),
            );
          }
        });
      }}
      name="properties.address.city"
      placeholder="Wpisz 3 znaki by wyszukac"
      options={cities}
    />
  );
}
