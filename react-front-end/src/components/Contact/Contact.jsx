import { useState } from "react";
import React from 'react';

// import './SectionOne.scss';
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from 'react-icons/fa';

import './Contact.scss'


function Contact (props) {


//   return (
    // <div className="topSection">
    //   <div className="topNav">
    //     <div>
    //       <img id="logo" src="cnergreenlogo.png" alt="Italian Trulli"/>
    //     </div>
    //     <div className="topButtonGroup">
    //       <Link className="topButton" to="/home">Home</Link>
    //       <Link className="topButton" to="/solution">Solution</Link>
    //       <Link className="topButton" to="/blog">Blog</Link>
    //       <Link className="topButton" to="/team">Team</Link>
    //       <Link className="topButton" to="/contact">Contact</Link>
    //     </div>
    //   </div>
    //   <div className="topText">
    //     <div className="titleMain">
    //       Clean and Efficient Hydrocarbon Production
    //     </div>
    //     <div className="txtAndButton">
    //       <div className="textAfterTitle">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    //       </div>
    //       <div>
    //       <button className="learnMoreButton">Learn More <FaRegHandPointRight id="learnMoreIcon" /></button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );






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
      case "title":
        setMessage({...message, title: event.target.value});
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
        <form >
          <p>What Can We Help You With?</p>
          <label> Email
            <input type="text" id="email" onChange= { handleChange }></input>
          </label>
          <label> Title
            <input type="text" id="title"  onChange= { handleChange }></input>
          </label>
          <label> Content
            <input type="text" id="content"  onChange= { handleChange }></input>
          </label>

        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
      {/* <div className="topText">
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
      </div> */}
    </div>

  );
    
}

export default Contact;
