import React from "react";
import "./SectionOne.scss";

function SectionOne() {
  return (
    <div className="topSection">
      <div className="topText">
        <div className="titleMain">
          Clean and Efficient Hydrocarbon Production
        </div>

        <div className="line_button">
          <div className="line" id="left_line"></div>
          <button className="button1">
            <a id="contact_button" href="/contact">
              Contact
            </a>
          </button>
          <div className="line" id="right_line"></div>
        </div>

        <div className="textAfterTitle">
          Putting Carbon where it's meant to be!
        </div>
      </div>
      <div>
        <img id="main_figure" src="main_figure.png" alt="main pic" />
      </div>
      <hr className="green_line" />
      <hr className="blue_line" />
    </div>
  );
}

export default SectionOne;
