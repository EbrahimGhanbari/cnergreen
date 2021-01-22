import React from "react";

import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import "./Contact.scss";

export default function (props) {
  return (
    <div className="contact_us">
      <TopNavBar />
      <div className="contact_us_1">
        <hr></hr>
        Contact Us
        <hr></hr>
      </div>
      <div className="contact_us_2">
        <div>Have a question? We can help find an answer!</div>
        <div>
          <a href="mailto:info@cnergreen.com">info@cnergreen.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
