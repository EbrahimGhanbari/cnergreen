import React from "react";
import "./SectionGrid.scss";

function SectionGrid({ gridInput }) {
  return (
    <div className="gridContainer">
      <a className="gridContainerItems" href="/team">
        <img className="imgGrid" src={gridInput.e1[1]} alt="Italian Trulli" />
        <div className="gridItemText"> {gridInput.e1[0]}</div>
      </a>
      <a className="gridContainerItems" href="/team">
        <img className="imgGrid" src={gridInput.e2[1]} alt="Italian Trulli" />
        <div className="gridItemText">{gridInput.e2[0]}</div>
      </a>
      <a className="gridContainerItems" href="/team">
        <img className="imgGrid" src={gridInput.e3[1]} alt="Italian Trulli" />
        <div className="gridItemText">{gridInput.e3[0]}</div>
      </a>
    </div>
  );
}

export default SectionGrid;
