import React from "react";
import "./TextImage.scss";
import Trail from "../Animation/Trail";

const pictureWidth = 35;
const pictureWidthStyle = { width: `${pictureWidth}vw` };

export default function TextImage({ content, direction }) {
  let animationDirection = [];
  if (direction === "left") {
    animationDirection = [-500, 500];
  } else if (direction === "right") {
    animationDirection = [500, -500];
  }

  return (
    <div className={`textImagContainer ${direction}`}>
      <Trail
        open={true}
        xValue={animationDirection[0]}
        direction={"horizontal"}
      >
        <div className="textImagSubContainer">
          <div className="textImagTitle">
            <hr></hr>
            {content.text[0]}
            <hr></hr>
          </div>
          <div className="textImagContent">{content.text[1]}</div>
        </div>
      </Trail>
      <Trail
        open={true}
        xValue={animationDirection[1]}
        direction={"horizontal"}
      >
        <div>
          <img
            src={content.img}
            style={pictureWidthStyle}
            alt="Italian Trulli"
          />
        </div>
      </Trail>
    </div>
  );
}
