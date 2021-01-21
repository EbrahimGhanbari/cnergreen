import React from "react";

import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import "./Temporary.scss";

export default function (props) {
  return (
    <div className="topSection">
      <TopNavBar />
      <div className="contactTitle">This page is Coming Soon.</div>

      <div className="contactText">
        <div>We are happy to hear from you!</div>
        <div>
          <a href="mailto:info@cnergreen.com">info@cnergreen.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
