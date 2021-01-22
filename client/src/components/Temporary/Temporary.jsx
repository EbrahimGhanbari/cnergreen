import React from "react";

import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import "./Temporary.scss";

export default function (props) {
  return (
    <div className="contact_us">
      <TopNavBar />
      <div className="contact_us_1">
        <hr></hr>
        This page is Coming Soon.
        <hr></hr>
      </div>
      <div className="contact_us_2">
        <div>We are happy to hear from you!</div>
        <div>
          <a href="mailto:info@cnergreen.com">info@cnergreen.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
