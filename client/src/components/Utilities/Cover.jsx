import React from "react";
import Trail from "../Animation/Trail";
import "./Cover.scss";

export default function Cover(props) {
  return (
    <div className="cover">
      <Trail open={true} xValue={-300} direction={"horizontal"}>
        <div>
          <img src={props.img} alt="main pic" />
        </div>
      </Trail>
      <Trail open={true} xValue={300} direction={"horizontal"}>
        <div className="cover_box">
          {props.title}
          <p>{props.text}</p>
        </div>
      </Trail>
    </div>
  );
}
