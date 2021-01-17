import React from "react";
import "./MainOne.scss";

export default function () {
  return (
    <div className="MainOne">
      <div className="MainOne_1">
        <p>Clean and Efficient Hydrocarbon Production</p>
        <div className="MainOne_1_1">
          <div className="line" id="left_line"></div>
          <button>
            <a href="/contact">Contact</a>
          </button>
        </div>
        <div className="MainOne_1_2">
          Putting Carbon where it's meant to be!
        </div>
      </div>
      <div className="MainOne_2">
        <img src="main_figure.png" alt="main pic" />
      </div>
      <hr className="green_line" />
      <hr className="blue_line" />
    </div>
  );
}
