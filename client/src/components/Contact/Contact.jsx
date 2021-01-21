import React from "react";

import TopNavBar from "../TopNavBar/TopNavBar";
import "./Contact.scss";

function Contact(props) {
  return (
    <div className="topSection">
      <TopNavBar />
      <div className="contactTitle">We Want To Hear From You!</div>

      <div className="contactText">
        <div>For everything else:</div>
        <div>
          <a href="mailto:info@cnergreen.com">info@cnergreen.com</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
