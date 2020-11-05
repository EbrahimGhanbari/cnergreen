import React from "react";
import TopNavBar from "../TopNavBar";
import TeamMember from "./TeamMember";

import "./Team.scss";

function Team(props) {

  const teamMembers = [
    {
      name: "Ali Telmadarreie",
      title: "Co-Founder & CEO",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut ero labore et dolore.`,
      link: `https://www.google.ca`,
    },
    {
      name: "Steven Bryant",
      title: "Co-Founder & CTO",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut ero labore et dolore.`,
      link: `https://www.google.ca`,
    },
    {
      name: "Rodger Bernar",
      title: "Chief Operationg Officer",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut ero labore et dolore.`,
      link: `https://www.google.ca`,
    },
    {
      name: "Alfred Fischer",
      title: "Senior Advisor",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut ero labore et dolore.`,
      link: `https://www.google.ca`,
    },
  ];
  return (
    <div>
      <TopNavBar />
      <div className="team_container">
        {teamMembers.map((member) => 
          <TeamMember member={member} />
        )}
      </div>
    </div>
  );
}

export default Team;
