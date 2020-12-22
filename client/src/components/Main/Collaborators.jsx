import React from "react";
import "./Collaborators.scss";

function Collaborators({ gridInput }) {
  return (
    <div>
      <hr className="seprator_line" />

      <div className="gridContainer">
        {gridInput.map((input) => (
          <a className="gridContainerItems" href={input[1]}>
            <img className="imgGrid" src={input[0]} alt="Italian Trulli" />
          </a>
        ))}
      </div>
      <hr className="seprator_line" />
    </div>
  );
}

export default Collaborators;
