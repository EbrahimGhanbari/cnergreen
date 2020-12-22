import React from "react";
import "./Collaborators.scss";

function Collaborators({ gridInput }) {
  console.log(gridInput);
  return (
    <div className="collaborators">
      <hr />
      {gridInput.map((input) => (
        <a href={input[1]} target="_blank">
          <img src={input[0]} alt="Italian Trulli" />
        </a>
      ))}
      <hr />
    </div>
  );
}

export default Collaborators;
