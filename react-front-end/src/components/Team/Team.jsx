import React from "react";
import TopNavBar from "../TopNavBar";
import TeamMember from "./TeamMember";

import './Team.scss'

function Team(props) {
  return (
    <div>
      <TopNavBar />
      <div className='team_container'>
        <TeamMember />
        <TeamMember />
        <TeamMember />
        <TeamMember />
      </div>
    </div>
  );
}

export default Team;
