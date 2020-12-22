/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.scss";

import { AiFillLinkedin } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";

export default function Footer(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer_main">
      <hr className="green_line" id="green_line_footer" />
      <hr className="blue_line" id="blue_line_footer" />
      <div>
        <section id="footer_section">
          <div className="footer">
            <div onClick={scrollTop}>
              <img
                id="footer_logo"
                src="footer_logo.png"
                alt="Italian Trulli"
              />
            </div>
            <div className="footer_map">
              <a href="/team">
                <img src="about_us.png" alt="Italian Trulli" />
              </a>
              <hr></hr>
              <a href="/contact">
                <img src="contact_us.png" alt="Italian Trulli" />
              </a>
            </div>
            <div>
              <a href="https://www.google.ca" target="_blank">
                <AiFillLinkedin className="footer_icons" id="linkdin" />
              </a>
              <hr></hr>
              <a href="https://www.google.ca" target="_blank">
                <ImYoutube2 className="footer_icons" id="youtube" />
              </a>
            </div>
          </div>
          <hr id="btm_line" />
          <div id="txt_footer">
            <p> {year} All Rights Reserved</p>
            <p> CNERGREEN</p>
          </div>
        </section>
      </div>
    </div>
  );
}
