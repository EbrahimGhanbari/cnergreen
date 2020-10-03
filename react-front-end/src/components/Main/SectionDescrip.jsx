import React from 'react';
import './SectionDescrip.scss';
import { FaRegHandPointRight } from 'react-icons/fa';



function SectionContent ({}) {

  return (
    <div className="descripContainer">
        <div className="descripTextContainer">
            <div className="descripTextContainerTitle">
                Main Products (Foam)
            </div>
            <div>
              <ul>
                <li>Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing</li>
                <li>Lorem Ipsum is simply dummy text of the printing</li>
                <li>Lorem Ipsum is simply dummy text of the printing</li>
              </ul> 
            </div>
            <div>
              <button className="learnMoreButtonWhite">Learn More <FaRegHandPointRight id="learnMoreIcon" /></button>
            </div>
        </div>
        <div className="descripImg">

        </div>
    </div>
  );

}

export default SectionContent;
