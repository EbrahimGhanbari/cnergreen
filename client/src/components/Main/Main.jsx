import React, { useState } from "react";
import { handleViewport } from "react-in-viewport";

import "./Main.scss";

import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import SectionDescrip from "./SectionDescrip";
import Collaborators from "./Collaborators";

import TextCenter from "../Utilities/TextCenter";
import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import Divider from "../Utilities/Divider";
import Trail from "../Animation/Trail";

const mainContent = require("./main.json");

export default function (props) {
  const collaborators = mainContent.collaborators;
  const gridInputTop = mainContent.gridInputTop;
  const content = mainContent.content;

  const [sectionDisplay, setSectionDisplay] = useState({
    collaborators: false,
  });
  const DividerView = handleViewport(Divider);

  return (
    <div>
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
      <div>
        <Trail open={true} xValue={-200} direction={"vertical"}>
          <MainOne />
        </Trail>
      </div>

      {/* <Divider height={"1vw"}></Divider> */}

      <div id="sectionTwo">
        <Trail open={true} xValue={0} direction={"horizontal"}>
          <TextCenter
            title={mainContent.textCenter.title}
            content={mainContent.textCenter.content}
          />
        </Trail>
        <Trail open={true} xValue={-0} direction={"horizontal"}>
          <MainTwo gridInput={gridInputTop} />
        </Trail>
      </div>

      {/* <Divider height={"60vh"}></Divider> */}

      <div id="solution">
        <SectionDescrip
          onEnterViewport={() => console.log("enter")}
          direction={"left"}
          content={content.e1}
        />
      </div>

      <SectionDescrip
        onEnterViewport={() => console.log("enter")}
        direction={"right"}
        content={content.e2}
      />

      {/* <Divider height={"60vh"}></Divider> */}
      {sectionDisplay.collaborators && (
        <Trail open={true} xValue={-500} direction={"horizontal"}>
          <Collaborators gridInput={collaborators} />
        </Trail>
      )}
      <DividerView
        height={"0.1vh"}
        onEnterViewport={() => {
          setSectionDisplay({ ...sectionDisplay, collaborators: true });
        }}
      />
      {/* <Divider height={"25vh"}></Divider> */}
      <Footer />
    </div>
  );
}
