import React, { useState, CSSProperties } from "react";
import { DefaultInput } from "../Input_Components/Default/index";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBreakpoint } from "@/utils/getBreakpoint";

interface SelectorProps<T> {
  items: T[];
  selectedValue: T;
  initialValue?: T;
  placeholder: string;
  onChange: (value: T) => void;
  selectorStyle?: React.CSSProperties;
  dropdownStyle?: React.CSSProperties;
  optionStyle?: React.CSSProperties;
  optionsContainerStyle?: React.CSSProperties;
}

export const Selector = <T extends string | number>({
  items,
  onChange,
  selectedValue,
  placeholder,
  initialValue,
  selectorStyle = {},
  dropdownStyle = {},
  optionStyle = {},
  optionsContainerStyle = {}
}: SelectorProps<T>): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<T>(initialValue || selectedValue);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (item: T) => {
    setSelectedItem(item);
    onChange(item);
    setIsOpen(false);
  };

  const defaultSelectorStyle: CSSProperties = {
    position: 'relative',
    width: '100%'
  };
  
  const defaultDropdownStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };
  
  const defaultOptionStyle: CSSProperties = {
    padding: '8px',
    cursor: 'pointer',
    borderBottom: '1px solid #ccc'
  };
  
  const defaultOptionsContainerStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    backgroundColor: '#ffffff',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    borderRadius: '4px',
    marginTop: '2px'
  };

  return (
    <div style={defaultSelectorStyle}>
      <div style={defaultDropdownStyle} onClick={toggleDropdown}>
        <DefaultInput
          placeholder={placeholder}
          readOnly
          value={selectedItem.toString()}
          border="none"
          focusBorder="none"
        />
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </div>
      {isOpen && (
        <div style={defaultOptionsContainerStyle}>
          {items.map((item, index) => (
            <div
              style={defaultOptionStyle}
              key={index}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
