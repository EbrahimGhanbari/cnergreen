import React from "react";
import "./TeamMember.scss";
import { AiFillLinkedin } from "react-icons/ai";

function TeamMember({ member }) {

  return (
    <div className="team_member">
      <div className="team_img team"></div>
      <div className="team_name team">{member.name}</div>
      <div className="team_title team">{member.title}</div>
      <div className="team_desc team">{member.desc}</div>
      <a href={member.link} target="_blank">
        <AiFillLinkedin className="team_icon" />
      </a>
    </div>
  );
}

export default TeamMember;
