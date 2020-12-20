import React from "react";
import "./TopNavBar.scss";

import Dropdown from "./Animation/Dropdown";

function Contact(props) {
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
            {/* <a className="topButton" href="/team"> */}
            <Dropdown />
            {/* </a> */}
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

export default Contact;
