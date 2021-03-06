/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Dropdown.scss";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";

export default function (props) {
  const options = props.options;
  const [isOpen, setIsOpen] = useState("hideDropdown");

  const togglingMouseEnter = () => {
    clearTimeout(timeOut);
    setIsOpen("showDropdown");
  };

  let timeOut = {};
  const togglingMouseLeave = () => {
    timeOut = setTimeout(() => {
      setIsOpen("hideDropdown");
    }, 300);
  };

  return (
    <div onMouseEnter={togglingMouseEnter} onMouseLeave={togglingMouseLeave}>
      <a>
        {props.title} <IoMdArrowDropdown />
      </a>

      <div
        className={`${isOpen} dropdown_container`}
        onMouseEnter={togglingMouseEnter}
        onMouseLeave={togglingMouseLeave}
      >
        {options.map((option) => (
          <li>
            <a href={option[1]} key={Math.random()}>
              <IoMdCheckmark />
              {option[0]}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}
