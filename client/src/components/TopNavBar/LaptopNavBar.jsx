import React from "react";
import Dropdown from "../Animation/Dropdown";

import "./LaptopNavBar.scss";

export default function (props) {
  return (
    <section className="topNav">
      <div>
        <img id="logo" src="cnergreenlogo.png" alt="Italian Trulli" />
      </div>
      <nav className="stroke topButtonGroup">
        <ul>
          <li>
            <a className="topButton" href="/">
              Home
            </a>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <a className="topButton" href="/team">
              Team
            </a>
          </li>
          <li>
            <a className="topButton" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}