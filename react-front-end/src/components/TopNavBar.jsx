import React from 'react';

import { Link } from "react-router-dom";

import './TopNavBar.scss';


function Contact (props) {

  return (
    <div className="topNav">
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
    </div>

  );
    
}

export default Contact;
