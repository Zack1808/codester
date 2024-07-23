import React, { useRef, useState, useEffect } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

import { Button } from "./";

import { SelectProps, DropDownPositionTypes } from "../types/";

import "../css/components/Select.css";

const Select: React.FC<SelectProps> = ({
  label,
  options,
  initialValue,
  ...rest
}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [dropdownPosition, setDropdownPosition] =
    useState<DropDownPositionTypes>({});

  const valueRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLInputElement>(null);
  const selectContainerRef = useRef<HTMLDivElement>(null);
  const dropdownContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setDropdownIsOpen((prevState) => !prevState);
  };

  const handleOptionSelect = (index: number) => {
    if (!valueRef.current || !labelRef.current || !options) return;

    valueRef.current.value = options[index].value;
    labelRef.current.value = options[index].label;
  };

  // Display the initialValue
  useEffect(() => {
    if (!valueRef.current || !labelRef.current || !initialValue || !options)
      return;

    const index = options.findIndex((item) => item.value === initialValue);

    valueRef.current.value = options[index].value;
    labelRef.current.value = options[index].label;
  }, []);

  // Determine rendering position of the dropdown
  useEffect(() => {
    if (!selectContainerRef.current || !dropdownContainerRef.current) return;

    const selectRect = selectContainerRef.current.getBoundingClientRect();
    const dropdownHeight = dropdownContainerRef.current.offsetHeight;
    const spaceAbove = selectRect.top;
    const spaceBelow = window.innerHeight - selectRect.bottom;

    if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
      setDropdownPosition({ bottom: "55%" });
    } else {
      setDropdownPosition({ top: "100%" });
    }
  }, [dropdownIsOpen]);

  return (
    <div className="select-component" aria-label="select">
      {label && <label htmlFor={rest.id}>{label}</label>}

      <div
        className="select-container"
        ref={selectContainerRef}
        tabIndex={1}
        aria-hidden
        onClick={handleClick}
        onBlur={() => setDropdownIsOpen(false)}
      >
        <input type="hidden" ref={valueRef} aria-hidden {...rest} />
        <input
          type="text"
          tabIndex={-1}
          ref={labelRef}
          readOnly
          aria-hidden
          placeholder="Select..."
        />
        <Button tabIndex={-1}>
          {dropdownIsOpen ? <FaCaretUp /> : <FaCaretDown />}
        </Button>
      </div>

      {dropdownIsOpen && (
        <div
          style={dropdownPosition}
          className="select-dropdown"
          ref={dropdownContainerRef}
        >
          <ul>
            {options &&
              options.map((option, index) => (
                <li key={option.value}>
                  <Button onMouseDown={() => handleOptionSelect(index)}>
                    {option.label}
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
