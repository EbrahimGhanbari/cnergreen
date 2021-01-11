import React from "react";
// import Plot from "react-plotly.js";
// import Plot from "plotly.js-cartesian-dist";
import PlotlyPackage from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(PlotlyPackage);

const config = {
  displaylogo: false,
  modeBarButtonsToRemove: [
    "pan2d",
    "select2d",
    "lasso2d",
    // "resetScale2d",
    "zoomOut2d",
    "autoScale2d",
    "zoomIn2d",
    "zoom2d",
    "hoverClosestCartesian",
  ],
};

const plotColor = ["red", "green", "blue"];

export default function Plotly(props) {
  const data = [];
  const layout = {
    showlegend: true,
    legend: {
      x: props.layout.xLegend,
      y: props.layout.yLegend,
    },
    width: window.innerWidth < 1000 ? window.innerWidth : 750,
    height: 600,
    hovermode: "closest",
    xaxis: {
      showspikes: true,
      title: props.layout.xTitle,
      range: props.layout.xRange,
    },
    yaxis: {
      nticks: 4,
      exponentformat: "none",
      gridwidth: 1,
      title: {
        text: props.layout.yTitle,
        font: {
          // size: 14,
        },
      },
      type: props.layout.yType,
      range: props.layout.yRange,
    },
    shapes: [
      {
        type: "line",
        x0: props.layout.x0,
        y0: props.layout.y0,
        x1: props.layout.x0,
        y1: props.layout.y1,
        line: {
          color: "black",
          width: 2,
        },
      },
      {
        type: "line",
        x0: props.layout.x1,
        y0: props.layout.y0,
        x1: props.layout.x1,
        y1: props.layout.y1,
        line: {
          color: "black",
          width: 2,
        },
      },
      {
        type: "line",
        x0: props.layout.x0,
        y0: props.layout.y0,
        x1: props.layout.x1,
        y1: props.layout.y0,
        line: {
          color: "black",
          width: 2,
        },
      },
      {
        type: "line",
        x0: props.layout.x0,
        y0: props.layout.y1,
        x1: props.layout.x1,
        y1: props.layout.y1,
        line: {
          color: "black",
          width: 2,
        },
      },
    ],
    margin: {
      l: 120,
      r: 80,
      t: 80,
      b: 80,
      pad: 10,
      autoexpand: true,
    },
    font: { family: "Arial", size: 15 },
  };

  // eslint-disable-next-line array-callback-return

  props.data.plotData.map((plotData, index) => {
    data.push({
      x: plotData.x,
      y: plotData.y,
      type: "scatter",
      mode: "lines",
      name: plotData.name,
      marker: { color: plotColor[index] },
      line: {
        width: plotData.width,
      },
    });
  });

  return <Plot config={config} data={data} layout={layout} />;
}
