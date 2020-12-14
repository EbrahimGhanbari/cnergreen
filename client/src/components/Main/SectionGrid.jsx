import React from "react";
import "./SectionGrid.scss";

function SectionGrid({ gridInput }) {
  return (
    <div className="gridContainer">
      <div>
        <img className="imgGrid" src={gridInput.e1[1]} alt="Italian Trulli" />
        <div className="gridItemText"> {gridInput.e1[0]}</div>
      </div>
      <div>
        <img className="imgGrid" src={gridInput.e2[1]} alt="Italian Trulli" />
        <div className="gridItemText">{gridInput.e2[0]}</div>
      </div>
      <div>
        <img className="imgGrid" src={gridInput.e3[1]} alt="Italian Trulli" />
        <div className="gridItemText">{gridInput.e3[0]}</div>
      </div>
    </div>
  );
}

export default SectionGrid;
