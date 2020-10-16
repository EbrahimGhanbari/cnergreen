import React from 'react';

import { Link } from "react-router-dom";
import TopNavBar from "../TopNavBar";

import './Contact.scss'

function Contact (props) {

  return (
    <div className="topSection">
      <TopNavBar />
      <div className="contactTitle">We Want To Hear From You!</div>
        
      <nav className="contactButtons">
        <button className="contactButtonItem">
          <Link to="/questionnaire">Start a Project</Link>
        </button>
        OR
        <button className="contactButtonItem">
        <Link to="/requestInfo">Request Information</Link>
        </button>
      </nav>
      <div className="contactText">
        <div>
          For everything else:
        </div>
        <div>
        <a href="mailto:info@cnergreen.com">info@cnergreen.com</a>
        </div>
      </div>
    </div>


    
  );
    
}

export default Contact;
