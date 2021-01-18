import React, { useState } from "react";
import { handleViewport } from "react-in-viewport";

import "./Main.scss";

import MainOne from "./MainOne";
import MainTwo from "./MainTwo";
import MainThree from "./MainThree";
import Collaborators from "./Collaborators";
import TextCenter from "../Utilities/TextCenter";
import TopNavBar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import Divider from "../Utilities/Divider";
import Trail from "../Animation/Trail";

const mainContent = require("./data.json");
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
      <div className="divider-2"></div>
      <div id="solution">
        <MainThree direction={"left"} content={content.e1} />
      </div>

      <MainThree direction={"right"} content={content.e2} />

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

// const mainContent = {
//   gridInputTop: {
//     e1: ["Enhanced Oil Recovery", "rig.png"],
//     e2: ["Fracture Driven Interaction", "foam.png"],
//     e3: ["Request Demo", "stat.png"],
//   },
//   collaborators: [
//     ["collaborator_1.png", "https://www.ucalgary.ca/"],
//     ["collaborator_3.png", "https://innovatecalgary.com/"],
//     [
//       "collaborator_5.jpg",
//       "https://research.ucalgary.ca/energy/energy-research/canada-excellence-research-chair",
//     ],
//     [
//       "collaborator_4.png",
//       "https://www.eco.ca/employment-programs/youth-placement/natural-resources/",
//     ],
//     ["collaborator_2.png", "https://www.alberta.ca/greenstem.aspx"],
//   ],
//   content: {
//     e1: {
//       link: "/cnerfoam",
//       img: "foam_product.png",
//       text: [
//         "CNERFOAM®",
//         "Innovative nanoparticle-based stable viscous foam and injection technology",
//         "Access un-swept reservoir increasing oil recovery and CO₂ storage",
//         "Maintains pressure in parent well avoiding fracture driven interactions, well damage, and production loss",
//       ],
//     },
//     e2: {
//       link: "/why_cnergreen",
//       img: "dollar.png",
//       text: [
//         "Why Cnergreen?",
//         "A unique team with more than 120 years of industry and management experience to deliver innovative solutions",
//         "Customized products to reservoir specific and application specific properties to ensure stability",
//         "Made with commercially available components and any gas type (CO₂, N₂, natural gas, steam)",
//       ],
//     },
//   },
//   textCenter: {
//     title: "CNERGREEN’s MISSION",
//     content:
//       " is to enable more responsible oil production by increasing the efficiency of EOR through lower costs and accelerated timelines, and promotes more sustainable EOR through a reduced environmental impact of production and avoided emissions of CO₂.",
//   },
// };
