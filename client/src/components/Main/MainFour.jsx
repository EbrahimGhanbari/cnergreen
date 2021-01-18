/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./MainFour.scss";

export default function ({ gridInput }) {
  return (
    <div className="MainFour">
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
