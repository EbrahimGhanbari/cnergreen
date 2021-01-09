/* eslint-disable react/jsx-no-target-blank */
import React from "react";

import "./TextCenter.scss";

export default function TextCenter(props) {
  return (
    <div className="TextCenter">
      <hr />
      <div>
        <p>{props.title}</p>
        {props.content}
      </div>
      <hr />
    </div>
  );
}
