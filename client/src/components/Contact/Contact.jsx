import React from "react";

import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import "./Contact.scss";

function Contact(props) {
  return (
    <div className="contact_us">
      <TopNavBar />
      <p className="contact_us_1">Contact Us</p>

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

export default Contact;
