import React from 'react';
import './SectionOne.scss';
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from 'react-icons/fa';

import TopNavBar from "../TopNavBar";



function SectionOne (props) {

  return (
    <div className="topSection">
      <TopNavBar />
      {/* <div className="topNav">
        <div>
          <img id="logo" src="cnergreenlogo.png" alt="Italian Trulli"/>
        </div>
        <div className="topButtonGroup">
          <Link className="topButton" to="/home">Home</Link>
          <Link className="topButton" to="/solution">Solution</Link>
          <Link className="topButton" to="/blog">Blog</Link>
          <Link className="topButton" to="/team">Team</Link>
          <Link className="topButton" to="/contact">Contact</Link>
        </div>
      </div> */}
      <div className="topText">
        <div className="titleMain">
          Clean and Efficient Hydrocarbon Production
        </div>
        <div className="txtAndButton">
          <div className="textAfterTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          </div>
          <div>
          <button className="learnMoreButton">Learn More <FaRegHandPointRight id="learnMoreIcon" /></button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default SectionOne;
