import React from "react";
import "./Main.scss";

import SectionOne from "./SectionOne";
import SectionGrid from "./SectionGrid";
import SectionDescrip from "./SectionDescrip";
import Collaborators from "./Collaborators";
import TopNavBar from "../TopNavBar";
import Footer from "../Footer";

// import DemoPlotly from "./DemoPlotly";

function Main(props) {
  const collaborators = [
    [
      "collaborator_1.png",
      "https://research.ucalgary.ca/energy/energy-research/canada-excellence-research-chair",
    ],
    ["collaborator_2.png", "https://www.alberta.ca/greenstem.aspx"],
    ["collaborator_3.png", "https://innovatecalgary.com/"],
  ];
  const gridInputTop = {
    e1: ["Enhance Oil Recovery", "rig.png"],
    e2: ["Optimize Production", "foam.png"],
    e3: ["Request Demo", "stat.png"],
  };

  const content = {
    e1: {
      link: "/",
      img: "foam_product.png",
      text: [
        "CNERFOAM",
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
        "Customized to reservoir specific properties to ensure stability",
        "Stable at reservoir conditions (temperature, salinity, crude oil) and can be collapsed on demand",
        "Made with commercially available components and any gas type (CO2, N2, natural gas, steam)",
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
      <Collaborators gridInput={collaborators} />
      <Footer />
      {/* <SectionGrid gridInput={gridInputButtom} /> */}
      {/* <DemoPlotly /> */}
    </div>
  );
}

export default Main;
