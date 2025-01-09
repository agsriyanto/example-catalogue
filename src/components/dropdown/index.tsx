import React, { useState, useRef, useEffect } from "react";
import { IconChevronDown } from '@tabler/icons-react'

import "./dropdown.scss";

const Dropdown = (props: any) => {
  const { sortOption, setSortOption } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const [tempSelected, setTempSelected] = useState<string>("");

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleOptionClick = (option) => {
    setTempSelected(option);
  };

  const handleApply = () => {
    setSortOption(tempSelected);
    setVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort-dropdown" ref={dropdownRef}>
      <button className="dropdown-trigger" onClick={toggleDropdown}>
        {sortOption}
        <IconChevronDown size={20} />
      </button>
      {visible && (
        <div className="dropdown-menu">
          <div className="dropdown-header">SORT</div>
          <ul className="dropdown-options">
            {["Low Price", "High Price", "Latest", "Oldest"].map((option) => (
              <li
                key={option}
                className={`dropdown-option ${
                  tempSelected === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
          <button className="apply-button" onClick={handleApply}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
