import React, { useState } from "react";
import "./SectionDescrip.scss";
import { FaRegHandPointRight } from "react-icons/fa";
// import Trail from "../Animation/Trail";

const pictureWidth = 35;
const pictureWidthStyle = { width: `${pictureWidth}vw` };

function SectionDescrip({ content, direction, ...props }) {
  const [coordinates, setCoordinates] = useState({ x: -1 });
  const [turn, setTurn] = useState("descripImg ");

  const screenWidth = window.innerWidth;

  const onMouse = (e) => {
    setCoordinates({
      x: e.nativeEvent.offsetX / screenWidth / pictureWidth / 0.01,
    });

    if (coordinates.x >= 0.5) {
      setTurn("descripImg right_turn");
    } else {
      setTurn("descripImg left_turn");
    }
  };

  let animationDirection = [];
  if (direction === "left") {
    animationDirection = [-500, 500];
  } else if (direction === "right") {
    animationDirection = [500, -500];
  }
  // console.log(animationDirection);

  return (
    <div className={`descripContainer ${direction}`}>
      <div className="descripTextContainer">
        <div className="descripTextContainerTitle">{content.text[0]}</div>
        <div>
          <ul>
            <li>{content.text[1]}</li>
            <li>{content.text[2]}</li>
            <li>{content.text[3]}</li>
          </ul>
        </div>
        <a className="learnMoreButtonDiv" href={content.link}>
          <button className="button1">
            Learn More <FaRegHandPointRight id="learnMoreIcon" />
          </button>
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

export default SectionDescrip;
