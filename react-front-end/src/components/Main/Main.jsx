import React, { useState } from 'react';
import './Main.scss';
import { Link } from "react-router-dom";



function Main (props) {

  return (
    <div className="topSection">
      <div className="topNav">
        <div>
          <img id="logo" src="cat.jpg" alt="Italian Trulli"/>
        </div>
        <div className="topButtonGroup">
          <Link className="topButton" to="/home">Home</Link>
          <Link className="topButton" to="/solution">Solution</Link>
          <Link className="topButton" to="/blog">Blog</Link>
          <Link className="topButton" to="/team">Team</Link>
          <Link className="topButton" to="/contact">Contact</Link>
        </div>
      </div>
      <div className="topText">
        <div className="title">
          Clean and Efficient Hydrocarbon Production
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>
        <button>
          Learn more
        </button>
      </div>
    </div>
  );

}

export default Main;
