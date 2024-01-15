import OffersControllers from "@/controllers/OffersController";

const AddOfferEnd = ({ formRef }) => {
  function buildBody() {
    return {
      data: {
        title: curr.querySelector("[name=title]")?.value,
        description: curr.querySelector("[name=description]")?.value,
        price:
          Number.parseInt(curr.querySelector("[name=price]")?.value) ??
          undefined,
        pricePerMonth:
          Number.parseInt(curr.querySelector("[name=pricePerMonth]")?.value) ??
          undefined,
        features: [...curr.querySelectorAll(".amenity:checked")]?.map(
          (el) => el.value,
        ),
        type: curr.querySelector("[name=type]")?.value,
        sellType: curr.querySelector("[name=rentType]")?.value,
        lat: Number.parseFloat(curr.querySelector("[name=lat]")?.value),
        lng: Number.parseFloat(curr.querySelector("[name=lng]")?.value),
        properties: [...curr.querySelectorAll("[data-property]")]?.reduce(
          (prev, curr) => {
            let val = curr.value;
            const name = curr.name;

            if (curr.type === "checkbox") val = curr.checked;
            if (name === "images") val = JSON.parse(val);
            if (curr.type === "number") val = curr.valueAsNumber;

            return { ...prev, [name]: val };
          },
          { region: curr.querySelector("[name=region]")?.value },
        ),
      },
    };
  }

  return (
    <div className="row">
      <button type="submit">Dodaj</button>
    </div>
  );
};

export default AddOfferEnd;
