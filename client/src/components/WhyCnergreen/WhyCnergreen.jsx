import React from "react";

import TopNavbar from "../TopNavBar";
import Footer from "../Footer";
import Plotly from "../Utilities/Plotly";
import Cover from "../Utilities/Cover";
import Divider from "../Utilities/Divider";
import TextImage from "../Utilities/TextImage";
import TextCenter from "../Main/TextCenter";

import data from "./variables";

const content = {
  e1: {
    link: "/cnerfoam",
    img: "cnerfoam_1.png",
    text: [
      "Highly stable and tunable",
      "CnerFoam can be tailored to specific applications and it remains stable in various conditions including in contact with crude oil (1 cp to + 10,000 cp), high salinity water (+200,000 ppm), and high temperature (+240 °C). CnerFoam viscosity and stability can be tuned on demand.",
    ],
  },
  e2: {
    link: "/why_cnergreen",
    img: "cnerfoam_2.jpg",
    text: [
      "Platform technology, not a single product",
      "Not limited to a certain type of chemicals, nanoparticles, or gas type (N2, CO2, natural gas, butane, steam, the combination of gases). CnerFoam can be also designed with non-aqueous liquids i.e. waterless foam.",
    ],
  },
};

export default function WhyCnergreen(props) {
  return (
    <div>
      <TopNavbar />
      <Cover
        img={"cover_2.jpg"}
        title={"Why Cnergreen"}
        text={"CnerFoam: step-change improvement vs status quo"}
      />
      <Divider height={"30vh"}></Divider>
      <TextCenter
        title={`CNERGREEN’s`}
        content={` core technology integrates advanced material science with classical reservoir engineering to create novel solutions for long-standing challenges for recovering oil from mature and low-efficiency reservoirs.
Superior stability and tunability of CnerFoam will result is step-change improvement compared to existing solutions. CnerFoam is scalable and tunable- unlike existing products which are one size fit all solution.
`}
      />
      <Divider height={"30vh"}></Divider>
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
      <Plotly
        data={data}
        layout={{
          xTitle: "Elapsed Time(hrs)",
          xRange: [0, 20],
          x0: 0,
          x1: 20,
          yTitle: `Pressure Maintained Above Reservoir Pressure (Psi)`,
          yType: "log",
          yRange: [1, 4],
          y0: 10,
          y1: 10000,
        }}
      />
      <Footer />
    </div>
  );
}
