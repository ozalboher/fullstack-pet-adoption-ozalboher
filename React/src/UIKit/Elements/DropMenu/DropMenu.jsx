import React from "react";
import "./DropMenu.css";


import { useState, useEffect, useRef } from "react";

export const DropMenu = ({ name, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item) => {
    setSelectedOption(item);
    setIsOpen(false);

    if (onSelect) {
      onSelect(item);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`} ref={dropdownRef}>
        <input
          type="text"
          className="dropdown-menu__input"
          placeholder={name}
          onClick={handleToggle}
          readOnly
          value={selectedOption ? selectedOption : ''}
        />
        <ul className="dropdown-menu__list">
          {items.map((item, index) => (
            <li
              key={index}
              className="dropdown-menu__item"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
