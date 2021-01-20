import React, { useState } from "react";
import { handleViewport } from "react-in-viewport";

import "./Main.scss";

import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import MainThree from "./MainThree";
import Collaborators from "./MainFour";
import TextCenter from "../Utilities/TextCenter";
import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import Divider from "../Utilities/Divider";
import Trail from "../Animation/Trail";

const mainContent = require("../../data/content.json").Home_Page;
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
      <div className="divider-1"></div>
      <div id="sectionTwo">
        <Trail open={true} xValue={0} direction={"horizontal"}>
          <TextCenter
            title={mainContent.textCenter.title}
            content={mainContent.textCenter.content}
          />
        </Trail>
        <div id="application"></div>
        <Trail open={true} xValue={-0} direction={"horizontal"}>
          <MainTwo gridInput={gridInputTop} />
        </Trail>
      </div>
      <div className="divider-2"></div>
      <div id="solution"></div>
      <MainThree direction={"left"} content={content.e1} />
      <MainThree direction={"right"} content={content.e2} />
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
      <Footer />
    </div>
  );
}
