import React from "react";
import Plot from "react-plotly.js";

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
const data = [];

export default function Plotly(props) {
  const layout = {
    width: window.innerWidth < 1000 ? window.innerWidth : 840,
    height: 700,
    legend: {
      x: 0.01,
      y: 0.01,
    },
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
      l: 80,
      r: 80,
      t: 80,
      b: 80,
      pad: 10,
      autoexpand: true,
    },
    font: { family: "Arial", size: 15 },
  };

  layout.width = window.innerWidth < 1000 ? window.innerWidth : 840;

  props.data.plotData.map((plotData, index) => {
    data.push({
      showlegend: true,
      x: plotData.x,
      y: plotData.y,
      type: "scatter",
      mode: "lines",
      name: plotData.name,
      marker: { color: plotColor[index] },
      line: {
        width: 5,
      },
    });
  });

  return <Plot config={config} data={data} layout={layout} />;
}
