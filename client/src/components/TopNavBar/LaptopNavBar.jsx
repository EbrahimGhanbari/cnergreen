import React from "react";
import Dropdown from "../Animation/Dropdown";

import "./LaptopNavBar.scss";

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
                [" Enhanced Oil Recovery", "/#/enhance_oil_recovery"],
                [
                  " Fracture Driven Interaction",
                  "/#/fracture_driven_interaction",
                ],
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
