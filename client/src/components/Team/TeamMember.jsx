/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./TeamMember.scss";
import { AiFillLinkedin } from "react-icons/ai";

export default function ({ member }) {
  return (
    <div className="team_member">
      <div>
        <img className="team_img" src={member.img} alt="Italian Trulli" />
      </div>
      <div className="team_name">{member.name}</div>
      <div className="team_title">{member.title}</div>
      <div className="team_desc">{member.desc}</div>
      <a href={member.link} target="_blank">
        <AiFillLinkedin className="team_icon" />
      </a>
    </div>
  );
}
