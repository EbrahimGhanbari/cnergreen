import React, { useState } from 'react';
import './Main.scss';
import { Link } from "react-router-dom";



function Main (props) {

  return (
    <div>
      <div>
        <Link className="topButton" to="/home">Home</Link>
        <Link className="topButton" to="/solution">Solution</Link>
        <Link className="topButton" to="/blog">Blog</Link>
        <Link className="topButton" to="/team">Team</Link>
        <Link className="topButton" to="/contact">Contact</Link>
      </div>
    </div>
  );

}

export default Main;
