import { useState } from "react";
import React from 'react';

// import './SectionOne.scss';
import { Link } from "react-router-dom";

import './Contact.scss'


function Contact (props) {


  const [message, setMessage] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();


  };

  const handleChange = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case "email":
        setMessage({...message, email: event.target.value});
        break;
      case "name":
        setMessage({...message, name: event.target.value});
        break;
      case "content":
        setMessage({...message, content: event.target.value});
        break;
    }

  };



  return (
    <div className="topSection">
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
      <div className="contactUsParent">

        <form className="contactUsForm">
          <p className="contactUsTitle">What Can We Help You With?</p>
          <label>
            <input className="contactUs" placeholder="Name" type="text" id="name"  onChange= { handleChange }/>
          </label>
          <label> 
            <input className="contactUs" placeholder="Email" type="text" id="email" onChange= { handleChange }/>
          </label>
          <label>
            <textarea className="contactUs" placeholder="Your Inquery" type="text" id="content"  onChange= { handleChange }/>
          </label>
          <label>
            <input className="contactUs" type="submit" value="Submit" id="contactUsSubmit" onSubmit={handleSubmit} />            
          </label>
      </form>
      </div>
      {/* <div className="topText">
        <div className="tit leMain">
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
      </div> */}
    </div>

  );
    
}

export default Contact;
