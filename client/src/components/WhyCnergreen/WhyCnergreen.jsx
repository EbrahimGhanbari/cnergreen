import React from "react";

import TopNavbar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import Cover from "../Utilities/Cover";
import Divider from "../Utilities/Divider";
import TextCenter from "../Utilities/TextCenter";
import TextGraph from "./TextGraph";

import dataFDIPressureMaintain from "./FDIPressureMaintain";
import dataFDIGasCnerFoam from "./FDIGasCnerFoam";
import EOR from "./EOR";
const content = {
  e1: {
    text: [
      "Efficient Pressure Maintenance",
      "CnerFoam maintain pressure in parent well more effectively (higher pressure for longer time with less material usage) thus preventing fraction driven interactions or frac hit.",
    ],
  },
  e2: {
    text: [
      "Non Damaging Characteristics",
      "CnerFoam has low leak off rate and reduce water usage at least by 80% (+ 200%). CnerFoam treatment does not impact the flow of hydrocarbon in parent well including water sensitive reservoirs reducing the risk of productivity loss and formation damage.",
    ],
  },
  e3: {
    text: [
      "CO2 Enhanced Oil Recovery",
      "In addition to any gases, CnerFoam can be also generated with liquid/supercritical CO2, creates high viscosity at reservoir condition, block short circuits created from CO2 injection and improve oil recovery an CO2 storage.",
    ],
  },
};

export default function (props) {
  return (
    <div>
      <TopNavbar />
      <Cover
        img={"cover_2.jpg"}
        title={"Why Cnergreen"}
        text={"CnerFoam: step-change improvement vs status quo"}
      />
      <Divider height={"40vh"}></Divider>
      <TextCenter
        title={`CNERGREEN’s`}
        content={` core technology integrates advanced material science with classical reservoir engineering to create novel solutions for long-standing challenges for recovering oil from mature and low-efficiency reservoirs.
Superior stability and tunability of CnerFoam will result is step-change improvement compared to existing solutions. CnerFoam is scalable and tunable- unlike existing products which are one size fit all solution.
`}
      />
      <Divider height={"20vh"}></Divider>
      <TextGraph
        // onEnterViewport={() => console.log("enter")}
        direction={"left"}
        content={content.e1}
        data={dataFDIPressureMaintain}
        layout={{
          xTitle: "Elapsed Time(hrs)",
          xLegend: 0.01,
          xRange: [0, 20],
          x0: 0,
          x1: 20,
          yTitle: `Pressure Maintained Above Reservoir Pressure (Psi)`,
          yLegend: 0.01,
          yType: "log",
          yRange: [1, 4],
          y0: 10,
          y1: 10000,
        }}
      />
      <Divider height={"60vh"}></Divider>
      <TextGraph
        onEnterViewport={() => console.log("enter")}
        direction={"right"}
        content={content.e2}
        data={dataFDIGasCnerFoam}
        layout={{
          xTitle: "Elapsed Time(hrs)",
          xLegend: 0.01,
          xRange: [0, 20],
          x0: 0,
          x1: 20,
          yTitle: `Pressure Maintained Above Reservoir Pressure (Psi)`,
          yLegend: 0.01,
          yType: "log",
          yRange: [1, 4],
          y0: 10,
          y1: 10000,
        }}
      />
      <Divider height={"60vh"}></Divider>
      <TextGraph
        onEnterViewport={() => console.log("enter")}
        direction={"left"}
        content={content.e3}
        data={EOR}
        layout={{
          xTitle: "Injection Time (min)",
          xLegend: 0.01,
          xRange: [0, 250],
          x0: 0,
          x1: 250,
          yTitle: `Apparent Viscosity (cp)`,
          yLegend: 0.98,
          yType: "linear",
          yRange: [0, 70],
          y0: 0,
          y1: 70,
        }}
      />
      <Divider height={"60vh"}></Divider>

      <Footer />
    </div>
  );
}
