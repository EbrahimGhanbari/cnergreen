import React, { useState } from 'react';
import axios from 'axios';
import './App.scss';
import { Link } from "react-router-dom";



function App (props) {

  const [message, setMessage] = useState("Click the button to load data!")

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      setMessage(response.data.message)
    }) 
  }



  return (
    <div className="App">
      <h1>{ message }</h1>
      <button onClick={ fetchData } >
        Fetch Data
      </button>        
    </div>
  );
    
}

export default App;
