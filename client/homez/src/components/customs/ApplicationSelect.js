import { useFormikContext } from "formik";

const { useSelect } = require("downshift");
const { useEffect } = require("react");

const ApplicationSelect = (
  { label, options, defaultOptionValue, name, required, onChange } = {
    required: false,
  },
) => {
  const formik = useFormikContext();

  const config = {
    initialSelectedItem:
      options.find((opt) => opt.value === defaultOptionValue) || undefined,
    items: options,
    itemToString: (item) => item.label,
  };

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useSelect(config);

  useEffect(() => {
    if (selectedItem) formik?.setFieldValue(name, selectedItem.value);
  }, [selectedItem]);

  useEffect(() => {
    if (defaultOptionValue && options && formik?.setFieldValue) {
      formik?.setFieldValue(name, defaultOptionValue);
    }
  }, [defaultOptionValue]);

  return (
    <>
      <div
        aria-role="select"
        {...getToggleButtonProps()}
        style={{
          width: "fit-content",
          height: "fit-content",
          maxHeight: "fit-content",
          position: "relative",
          display: "inline-block",
        }}
      >
        <div className="w-72 flex flex-col gap-1 form-select">
          <input
            type="hidden"
            name={name}
            value={
              selectedItem
                ? selectedItem.value
                : defaultOptionValue
                  ? options.find((opt) => opt.value === defaultOptionValue)
                    ?.value
                  : ""
            }
            required={required}
          />
          <div className="p-2 bg-white flex justify-between cursor-pointer">
            <span>
              {selectedItem
                ? selectedItem.label
                : defaultOptionValue
                  ? options.find((opt) => opt.value === defaultOptionValue)
                    ?.label
                  : label}
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul
          className={`border rounded absolute dropdown-list w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 pointer `}
          {...getMenuProps({
            required: true,
            name: name,
            style: { position: "absolute", top: "2em", left: 0, zIndex: 9999 },
          })}
        >
          {options.map((item, index) => (
            <li
              className={`dropdown-item p5`}
              key={index}
              {...getItemProps({ item, index })}
            >
              <span>{item.label}</span>
            </li>
          ))}{" "}
        </ul>
      )}
    </>
  );
};

export default ApplicationSelect;
