import { useFormikContext } from "formik";

const { useSelect } = require("downshift");
const { useEffect } = require("react");

const ApplicationSelect = (
  {
    label,
    options,
    defaultOptionValue,
    name,
    required,
    onChange,
    menuPosition,
  } = {
    required: false,
    menuPosition: "absolute",
  },
) => {
  const formik = useFormikContext();

  const config = {
    initialSelectedItem:
      options.find((opt) => opt.value === defaultOptionValue) || undefined,
    items: options,
    itemToString: (item) => item.label,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) =>
      onChange(newSelectedItem),
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
        className="dropdown"
        {...getToggleButtonProps()}
        style={{
          width: "fit-content",
          height: "fit-content",
          maxHeight: "fit-content",
          display: "inline-block",
        }}
      >
        <div className="w-72 flex flex-col gap-1 form-control">
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
            <span className="dropdown-toggle">
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
          style={{
            display: "block",
            position: menuPosition,
          }}
          className="bg-white dropdown-menu border border-secondary border-rounded"
          {...getMenuProps({
            required: true,
            name: name,
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
