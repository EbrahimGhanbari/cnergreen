import React from "react";
import "./TeamMember.scss";
import { AiFillLinkedin } from "react-icons/ai";

function TeamMember(props) {
  return (
    <div className="team_member">
      <div className="team_img team"></div>
      <div className="team_name team">Ali Telma</div>
      <div className="team_title team">CO-FOUNDER ...</div>
      <div className="team_desc team">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut ero labore et dolore.
      </div>
      <a href="https://www.google.ca" target="_blank" >
        <AiFillLinkedin className="team_icon" />
      </a>
    </div>
  );
}

export default TeamMember;
