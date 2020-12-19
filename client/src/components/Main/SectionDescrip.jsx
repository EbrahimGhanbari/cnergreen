import React from "react";
import "./SectionDescrip.scss";
import { FaRegHandPointRight } from "react-icons/fa";

function SectionDescrip({ content, direction }) {
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
        <div className="learnMoreButtonDiv">
          <button className="learnMoreButton">
            Learn More <FaRegHandPointRight id="learnMoreIcon" />
          </button>
        </div>
      </div>
      <div>
        <img src={content.img} className="descripImg" alt="Italian Trulli" />
      </div>
    </div>
  );
}

export default SectionDescrip;
