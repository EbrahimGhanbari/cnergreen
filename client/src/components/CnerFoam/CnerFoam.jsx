import React from "react";

import TopNavbar from "../TopNavBar";
import Footer from "../Footer";
import TextImage from "./TextImage";
import Divider from "../Divider";
export default function CnerFoam(props) {
  const content = {
    e1: {
      link: "/cnerfoam",
      img: "foam_product.png",
      text: [
        "Highly stable and tunable",
        "CnerFoam can be tailored to specific applications and it remains stable in various conditions including in contact with crude oil (1 cp to + 10,000 cp), high salinity water (+200,000 ppm), and high temperature (+240 °C). CnerFoam viscosity and stability can be tuned on demand.",
      ],
    },
    e2: {
      link: "/why_cnergreen",
      img: "dollar.png",
      text: [
        "Platform technology, not a single product",
        "Not limited to a certain type of chemicals, nanoparticles, or gas type (N2, CO2, natural gas, butane, steam, the combination of gases). CnerFoam can be also designed with non-aqueous liquids i.e. waterless foam.",
      ],
    },
  };

  return (
    <div>
      <TopNavbar />
      <TextImage
        onEnterViewport={() => console.log("enter")}
        direction={"left"}
        content={content.e1}
      />
      <Divider height={"60vh"}></Divider>
      <TextImage
        onEnterViewport={() => console.log("enter")}
        direction={"right"}
        content={content.e2}
      />
      <Divider height={"60vh"}></Divider>
      <Footer />
    </div>
  );
}