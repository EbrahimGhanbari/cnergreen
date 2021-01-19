import React from "react";
import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import TeamMember from "./TeamMember";
import Trail from "../Animation/Trail";

import "./Team.scss";
const teamMembers = require("./teamData.json").team;

export default function (props) {
  return (
    <div className="team">
      <div className="main_nav">
        <Trail
          style={{ height: "20vh" }}
          open={true}
          xValue={200}
          direction={"vertical"}
        >
          <TopNavBar />
        </Trail>
      </div>
      <div className="divider-3"></div>
      <div className="team_2">
        <Trail open={true} xValue={-200} direction={"vertical"}>
          <div className="team_container">
            {teamMembers.map((member) => (
              <TeamMember member={member} />
            ))}
          </div>
        </Trail>
      </div>
      <div className="divider-4"></div>
      <Footer />
    </div>
  );
}
