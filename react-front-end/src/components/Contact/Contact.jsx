import { useState } from "react";
import React from 'react';


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
      case "title":
        setMessage({...message, title: event.target.value});
        break;
      case "content":
        setMessage({...message, content: event.target.value});
        break;
    }

  };



  return (
    <form >
      <label>
      Email
        <input type="text" id="email" onChange= { handleChange }></input>
      </label>
      <label>
        Title
        <input type="text" id="title"  onChange= { handleChange }></input>
      </label>
      <label>
      Content
        <input type="text" id="content"  onChange= { handleChange }></input>
      </label>

      <input type="submit" value="Submit" onSubmit={handleSubmit} />
    </form>
  );
    
}

export default Contact;
