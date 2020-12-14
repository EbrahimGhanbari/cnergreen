import React from "react";
import "./Main.scss";

import SectionOne from "./SectionOne";
import SectionGrid from "./SectionGrid";
import SectionDescrip from "./SectionDescrip";
import TopNavBar from "../TopNavBar";

// import DemoPlotly from "./DemoPlotly";

function Main(props) {
  // this is the grid input for different sections
  const gridInputTop = {
    e1: ["Enhance Oil Recovery", "rig.png"],
    e2: ["Optimize Production", "foam.png"],
    e3: ["Request Demo", "stat.png"],
  };

  const gridInputButtom = {
    e1: ["Analytics"],
    e2: ["About Us"],
    e3: ["Contact Us"],
  };

  const content = {
    e1: {
      img: "",
      text: [
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
      ],
    },
    e2: {
      img: "",
      text: [
        "sec 2 Lorem Ipsum is simply dummy text of the printing",
        "sec 2 Lorem Ipsum is simply dummy text of the printing",
        "sec 2 Lorem Ipsum is simply dummy text of the printing",
      ],
    },
  };

  return (
    <div>
      <TopNavBar />
      <SectionOne />
      <SectionGrid gridInput={gridInputTop} />
      <SectionDescrip direction={"left"} content={content.e1} />
      <SectionDescrip direction={"right"} content={content.e2} />
      <SectionGrid gridInput={gridInputButtom} />
      {/* <DemoPlotly /> */}
    </div>
  );
}

export default Main;
