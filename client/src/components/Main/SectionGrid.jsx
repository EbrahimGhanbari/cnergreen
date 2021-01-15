import React, { useState } from "react";
import "./SectionGrid.scss";

const pictureWidth = 18;
const pictureWidthStyle = { width: `${pictureWidth}vw` };

function SectionGrid({ gridInput }) {
  const [coordinates, setCoordinates] = useState({ x: -1 });
  const [turn, setTurn] = useState("imgGrid ");

  const screenWidth = window.innerWidth;

  const onMouse = (e) => {
    setCoordinates({
      x: e.nativeEvent.offsetX / screenWidth / pictureWidth / 0.01,
    });

    if (coordinates.x >= 0.5) {
      setTurn("imgGrid right_turn");
    } else {
      setTurn("imgGrid left_turn");
    }
  };

  return (
    <div id="application" className="gridContainer">
      <a className="gridContainerItems" href="/team">
        <img
          style={pictureWidthStyle}
          onMouseMove={onMouse}
          className={turn}
          src={gridInput.e1[1]}
          alt="Italian Trulli"
        />
        <div className="gridItemText"> {gridInput.e1[0]}</div>
      </a>
      <a className="gridContainerItems" href="/team">
        <img
          style={pictureWidthStyle}
          onMouseMove={onMouse}
          className={turn}
          src={gridInput.e2[1]}
          alt="Italian Trulli"
        />
        <div className="gridItemText">{gridInput.e2[0]}</div>
      </a>
      <a className="gridContainerItems" href="/team">
        <img
          style={pictureWidthStyle}
          onMouseMove={onMouse}
          className={turn}
          src={gridInput.e3[1]}
          alt="Italian Trulli"
        />
        <div className="gridItemText">{gridInput.e3[0]}</div>
      </a>
    </div>
  );
}

export default SectionGrid;
