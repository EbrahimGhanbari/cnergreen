import React from "react";
import Dropdown from "../Animation/Dropdown";

import "./LaptopNavBar.scss";
const webData = require("../../data/content.json").Home_Page;

export default function (props) {
  return (
    <section className="navbar_laptop">
      <div>
        <img src="cnergreenlogo.png" alt="Italian Trulli" />
      </div>
      <nav className="stroke">
        <ul>
          <li>
            <a className="topButton" href="/">
              Home
            </a>
          </li>
          <li>
            <Dropdown
              options={[
                [webData.gridInputTop.e1[0], webData.gridInputTop.e1[2]],
                [webData.gridInputTop.e2[0], webData.gridInputTop.e2[2]],
                [webData.gridInputTop.e3[0], webData.gridInputTop.e3[2]],
              ]}
              title={"Solution"}
            />
          </li>
          <li>
            <a className="topButton" href="/#/team">
              Team
            </a>
          </li>
          <li>
            <a className="topButton" href="/#/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
