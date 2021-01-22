import React from "react";
import "./TextImage.scss";

export default function TextImage({ content, direction, styleMode = "" }) {
  return (
    <div className={`textImagContainer ${direction} ${styleMode}`}>
      <div className="textImagSubContainer">
        <div className="textImagTitle">
          <hr></hr>
          {content.text[0]}
          <hr></hr>
        </div>
        <div className="textImagContent">{content.text[1]}</div>
      </div>
      <div className="img_sec">
        <img src={content.img} alt="Italian Trulli" />
      </div>
    </div>
  );
}
