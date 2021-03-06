import React, { useEffect } from "react";

import TopNavbar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import Cover from "../Utilities/Cover";
import TextCenter from "../Utilities/TextCenter";
import TextGraph from "./TextGraph";

import "./WhyCnergreen.scss";

const plotData = require("../../data/graph.json");
const EOR = plotData.EOR;
const dataFDIGasCnerFoam = plotData.FDIGasCnerFoam;
const dataFDIPressureMaintain = plotData.FDIPressureMaintain;

const webData = require("../../data/content.json").WhyCnergreen_Page;

export default function (props) {
  const content = webData.content;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopNavbar />
      <Cover
        img={webData.cover.img}
        title={webData.cover.title}
        text={webData.cover.text}
      />
      <div className="space_text_center_why_cnergreen"></div>
      <TextCenter
        title={webData.textCenter.title}
        content={webData.textCenter.content}
      />
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
      <TextGraph
        direction={"right"}
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
      <TextGraph
        direction={"left"}
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

      <Footer />
    </div>
  );
}
