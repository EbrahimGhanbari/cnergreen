import { useState } from "react";
import React from 'react';

import TopNavBar from "../TopNavBar";

import './RequestInfo.scss'

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
      <TopNavBar />
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
    </div>
  );
    
}

export default Contact;
