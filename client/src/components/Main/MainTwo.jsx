import React, { useState } from "react";
import "./MainTwo.scss";

export default function ({ gridInput }) {
  const [coordinates, setCoordinates] = useState({ x: -1 });
  const [turn, setTurn] = useState("imgGrid ");
  const screenWidth = window.innerWidth;
  const pictureWidth = screenWidth < 539 ? 35 : 18;
  const pictureWidthStyle = { width: `${pictureWidth}vw` };

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
    <div className="MainTwo">
      <a href="/#/underconstruction">
        <img
          style={pictureWidthStyle}
          onMouseMove={onMouse}
          className={turn}
          src={gridInput.e1[1]}
          alt="Italian Trulli"
        />
        <p> {gridInput.e1[0]}</p>
      </a>
      <a href="/#/underconstruction">
        <img
          style={pictureWidthStyle}
          onMouseMove={onMouse}
          className={turn}
          src={gridInput.e2[1]}
          alt="Italian Trulli"
        />
        <p>{gridInput.e2[0]}</p>
      </a>
      <a href="/#/underconstruction">
        <img
          style={pictureWidthStyle}
          onMouseMove={onMouse}
          className={turn}
          src={gridInput.e3[1]}
          alt="Italian Trulli"
        />
        <p>{gridInput.e3[0]}</p>
      </a>
    </div>
  );
}
