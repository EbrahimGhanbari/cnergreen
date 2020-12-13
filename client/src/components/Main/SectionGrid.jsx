import React from "react";
import "./SectionGrid.scss";

function SectionOne({ gridInput }) {
  return (
    <div className="gridContainer">
      <div>
        <img className="imgGrid" src="rig.png" alt="Italian Trulli" />
        <div className="gridItemText"> {gridInput.e1[0]}</div>
      </div>
      <div>
        <img className="imgGrid" src="foam.png" alt="Italian Trulli" />
        <div className="gridItemText">{gridInput.e2[0]}</div>
      </div>
      <div>
        <img className="imgGrid" src="stat.png" alt="Italian Trulli" />
        <div className="gridItemText">{gridInput.e3[0]}</div>
      </div>
    </div>
  );
}

export default SectionOne;
