import useAmenities from "@/hooks/useAmenities";

const Amenities = () => {
  const amenities = useAmenities();

  return (
    <>
      {amenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, amenityIndex) => (
                <label className="custom_checkbox">
                  {amenity.name}
                  <input
                    type="checkbox"
                    className="amenity"
                    value={amenity.id}
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
