import React, { useState } from "react";
import "./MainThree.scss";

export default function ({ content, direction, ...props }) {
  const pictureWidth = 35;
  const pictureWidthStyle = { width: `${pictureWidth}vw` };
  const [coordinates, setCoordinates] = useState({ x: -1 });
  const [turn, setTurn] = useState("");
  const screenWidth = window.innerWidth;

  const onMouse = (e) => {
    setCoordinates({
      x: e.nativeEvent.offsetX / screenWidth / pictureWidth / 0.01,
    });

    if (coordinates.x >= 0.5) {
      setTurn("right_turn");
    } else {
      setTurn("left_turn");
    }
  };

  return (
    <div className={`MainThree ${direction}`}>
      <div>
        <div className="MainThree_1_1">{content.text[0]}</div>
        <div>
          <ul>
            <li>{content.text[1]}</li>
            <li>{content.text[2]}</li>
            <li>{content.text[3]}</li>
          </ul>
        </div>
        <a href={content.link}>
          <button className="button_blue">Learn More</button>
        </a>
      </div>
      <a href={content.link}>
        <img
          src={content.img}
          onMouseMove={onMouse}
          className={turn}
          style={pictureWidthStyle}
          alt="Italian Trulli"
        />
      </a>
    </div>
  );
}
