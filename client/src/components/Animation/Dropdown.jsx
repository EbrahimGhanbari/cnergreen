/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Dropdown.scss";
import { IoMdArrowDropdown } from "react-icons/io";

const options = [
  ["> Enhance Oil Recovery", "/solution"],
  ["> Optimize Production", "/solution"],
];

function Dropdown() {
  const [isOpen, setIsOpen] = useState("dropdown_container hiddenDropdown");

  const togglingMouseEnter = () => {
    clearTimeout(timeOut);
    setIsOpen("dropdown_container showDropdown");
  };

  let timeOut = {};
  const togglingMouseLeave = () => {
    timeOut = setTimeout(() => {
      setIsOpen("dropdown_container hiddenDropdown");
    }, 300);
  };

  return (
    <div onMouseEnter={togglingMouseEnter} onMouseLeave={togglingMouseLeave}>
      <a className="topButton">
        Solution <IoMdArrowDropdown />
      </a>

      <div
        className={isOpen}
        onMouseEnter={togglingMouseEnter}
        onMouseLeave={togglingMouseLeave}
      >
        {options.map((option) => (
          <li>
            <a href={option[1]} key={Math.random()}>
              {option[0]}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
