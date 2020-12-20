/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Dropdown.scss";

const options = ["Mangoes Apples Apples", "Apples", "Oranges"];

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const togglingMouseEnter = () => setIsOpen(true);
  const togglingMouseLeave = () => setIsOpen(false);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return (
    <div onMouseEnter={togglingMouseEnter} onMouseLeave={togglingMouseLeave}>
      <a className="topButton">{selectedOption || "Mangoes"}</a>
      {isOpen && (
        <div className="dropdown_container">
          <ul>
            {options.map((option) => (
              <li onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
