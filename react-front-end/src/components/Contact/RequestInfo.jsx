import { useState } from "react";
import React from "react";
import axios from "axios";

import TopNavBar from "../TopNavBar";

import "./RequestInfo.scss";

function Contact(props) {
  const [message, setMessage] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/message", message)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    event.preventDefault();

    switch (event.target.id) {
      case "email":
        setMessage({ ...message, email: event.target.value });
        break;
      case "name":
        setMessage({ ...message, name: event.target.value });
        break;
      case "content":
        setMessage({ ...message, content: event.target.value });
        break;
    }
  };

  return (
    <div className="topSection">
      <TopNavBar />
      <div className="contactUsParent">
        <form className="contactUsForm">
          <p className="contactUsTitle">What Can We Help You With?</p>
          <div>
            <input
              className="contactUs"
              placeholder="Name"
              type="text"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="contactUs"
              placeholder="Email"
              type="text"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="contactUs"
              placeholder="Your Inquery"
              type="text"
              id="content"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="contactUs"
              type="submit"
              value="Send Message"
              id="contactUsSubmit"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
