import React, { useState } from "react";
import { handleViewport } from "react-in-viewport";

import "./Main.scss";

import SectionOne from "./SectionOne";
import SectionGrid from "./SectionGrid";
import SectionDescrip from "./SectionDescrip";
import Collaborators from "./Collaborators";
import TextCenter from "./TextCenter";

import TopNavBar from "../TopNavBar";
import Footer from "../Footer";
import Divider from "../Divider";

//Animations
import Trail from "../Animation/Trail";

// import DemoPlotly from "./DemoPlotly";

function Main(props) {
  const collaborators = [
    [
      "collaborator_1.png",
      "https://research.ucalgary.ca/energy/energy-research/canada-excellence-research-chair",
    ],
    ["collaborator_2.png", "https://www.alberta.ca/greenstem.aspx"],
    ["collaborator_3.png", "https://innovatecalgary.com/"],
    [
      "collaborator_4.png",
      "https://www.eco.ca/employment-programs/youth-placement/natural-resources/",
    ],
  ];
  const gridInputTop = {
    e1: ["Enhance Oil Recovery", "rig.png"],
    e2: ["Fracture Driven Interaction", "foam.png"],
    e3: ["Request Demo", "stat.png"],
  };

  const content = {
    e1: {
      link: "/",
      img: "foam_product.png",
      text: [
        "CNERFOAM®",
        "Innovative nanoparticle-based stable viscous foam and injection technology",
        "Access un-swept reservoir increasing oil recovery and CO2 storage",
        "Maintains pressure in parent well avoiding fracture driven interactions, well damage, and production loss",
      ],
    },
    e2: {
      link: "/",
      img: "dollar.png",
      text: [
        "Why Cnergreen?",
        "A unique team with more than 120 years of industry and management experience to deliver innovative solutions",
        "Customized products to reservoir specific and application specific properties to ensure stability",
        "Made with commercially available components and any gas type (CO2, N2, natural gas, steam)",
      ],
    },
  };

  const [sectionDisplay, setSectionDisplay] = useState({
    sectionOne: true,
    sectionTwo: false,
    sectionThree: false,
    sectionFour: false,
    sectionSix: false,
  });

  const DividerView = handleViewport(Divider);

  return (
    <div>
      {sectionDisplay.sectionOne && (
        <div id="section_One">
          <Trail open={true} xValue={-500} direction={"vertical"}>
            <TopNavBar />
          </Trail>
          <Trail open={true} xValue={500}>
            <SectionOne />
          </Trail>
        </div>
      )}

      <Divider height={"60vh"}></Divider>

      {sectionDisplay.sectionTwo && (
        <div id="sectionTwo">
          <Trail open={true} xValue={0} direction={"horizontal"}>
            <TextCenter />
          </Trail>
          <Trail open={true} xValue={-0} direction={"horizontal"}>
            <SectionGrid gridInput={gridInputTop} />
          </Trail>
        </div>
      )}

      <DividerView
        height={"0.1vh"}
        onEnterViewport={() => {
          setSectionDisplay({ ...sectionDisplay, sectionTwo: true });
        }}
      />
      <Divider height={"60vh"}></Divider>
      <DividerView
        height={"0.1vh"}
        onEnterViewport={() => {
          setSectionDisplay({ ...sectionDisplay, sectionThree: true });
        }}
      />

      {sectionDisplay.sectionThree && (
        <SectionDescrip
          onEnterViewport={() => console.log("enter")}
          direction={"left"}
          content={content.e1}
        />
      )}

      <Divider height={"60vh"}></Divider>

      <DividerView
        height={"0.1vh"}
        onEnterViewport={() => {
          setSectionDisplay({ ...sectionDisplay, sectionFour: true });
        }}
      />

      {sectionDisplay.sectionFour && (
        <SectionDescrip
          onEnterViewport={() => console.log("enter")}
          direction={"right"}
          content={content.e2}
        />
      )}

      <Divider height={"60vh"}></Divider>
      {sectionDisplay.sectionFive && (
        <Trail open={true} xValue={-500} direction={"horizontal"}>
          <Collaborators gridInput={collaborators} />
        </Trail>
      )}
      <DividerView
        height={"0.1vh"}
        onEnterViewport={() => {
          setSectionDisplay({ ...sectionDisplay, sectionFive: true });
        }}
      />
      <Divider height={"25vh"}></Divider>
      {<Footer />}

      {/* <DemoPlotly /> */}
    </div>
  );
}

export default Main;
