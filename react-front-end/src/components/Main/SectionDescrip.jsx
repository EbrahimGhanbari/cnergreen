import React from 'react';
import './SectionDescrip.scss';
import { FaRegHandPointRight } from 'react-icons/fa';



function SectionContent ({content, direction}) {


  return (
    <div className={`descripContainer ${direction}`}>
        <div className="descripTextContainer">
            <div className="descripTextContainerTitle">
                Main Products (Foam)
            </div>
            <div>
              <ul>
                <li>{content.text[0]}</li>
                <li>{content.text[1]}</li>
                <li>{content.text[2]}</li>
              </ul> 
            </div>
            <div className="learnMoreButtonDiv">
              <button className="learnMoreButtonWhite">Learn More <FaRegHandPointRight id="learnMoreIcon" /></button>
            </div>
        </div>
        <div className="descripImg">

        </div>
    </div>
  );

}

export default SectionContent;
