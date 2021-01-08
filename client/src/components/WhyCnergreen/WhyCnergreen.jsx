import React from "react";

import TopNavbar from "../TopNavBar";
import Footer from "../Footer";
import Plotly from "../Utilities/Plotly";

import data from "./variables";

export default function WhyCnergreen(props) {
  return (
    <div>
      <TopNavbar />
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
