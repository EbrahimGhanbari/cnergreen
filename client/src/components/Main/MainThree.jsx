import React, { useState } from "react";
import "./MainThree.scss";

const pictureWidth = 35;
const pictureWidthStyle = { width: `${pictureWidth}vw` };

export default function ({ content, direction, ...props }) {
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

  // let animationDirection = [];
  // if (direction === "left") {
  //   animationDirection = [-500, 500];
  // } else if (direction === "right") {
  //   animationDirection = [500, -500];
  // }

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
