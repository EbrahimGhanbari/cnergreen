import React from "react";
import "./TeamMember.scss";

function TeamMember(props) {
  return (
    <div className="team_member">
      <div id="team_img"></div>
      <div id="team_name">Ali Telma</div>
      <div id="team_title">CO-FOUNDER ...</div>
      <div id="team_desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut ero labore et dolore.
      </div>
      <div id="team_icon"></div>
    </div>
  );
}

export default TeamMember;
