import React from "react";

import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import "./Contact.scss";

const webData = require("../../data/content.json").Contact_Page;

export default function (props) {
  return (
    <div className="contact_us">
      <TopNavBar />
      <div className="contact_us_1">
        <hr></hr>
        {webData.title}
        <hr></hr>
      </div>
      <div className="contact_us_2">
        <div>{webData.subtitle[0]}</div>
        <div>{webData.subtitle[1]}</div>
        <div>
          <a href={`mailto:${webData.email}`}>{webData.email}</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
