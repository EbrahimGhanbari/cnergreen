import React, { useState, useEffect } from "react";
import PlotlyPackage from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(PlotlyPackage);

const config = {
  displaylogo: false,
  modeBarButtonsToRemove: [
    "pan2d",
    "select2d",
    "lasso2d",
    "zoomOut2d",
    "autoScale2d",
    "zoomIn2d",
    "zoom2d",
    "hoverClosestCartesian",
  ],
};

const plotColor = ["red", "green", "blue"];

export default function (props) {
  const data = [];
  const size = useWindowSize();

  // Hook
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
  }

  const [layout, setLayout] = useState({
    showlegend: true,
    legend: {
      x: props.layout.xLegend,
      y: props.layout.yLegend,
    },
    width: window.innerWidth < 1000 ? window.innerWidth : 750,
    height: window.innerWidth < 1000 ? window.innerWidth : 750,
    font: { family: "Arial", size: 15 },
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
      l: 90,
      r: 80,
      t: 80,
      b: 80,
      pad: 10,
      autoexpand: true,
    },
  });
  useEffect(() => {
    size.width <= 539
      ? setLayout({
          ...layout,
          width: size.width,
          height: 1.0 * size.width,
          font: { ...layout.font, size: 11 },
        })
      : setLayout({ ...layout });
    size.width > 539 && size.width < 800
      ? setLayout({
          ...layout,
          width: 0.9 * size.width,
          height: 0.8 * size.width,
          font: { ...layout.font, size: 13 },
        })
      : setLayout({ ...layout });
    size.width >= 800 && size.width < 1000
      ? setLayout({
          ...layout,
          width: 0.7 * size.width,
          height: 0.6 * size.width,
          font: { ...layout.font, size: 14 },
        })
      : setLayout({ ...layout });
    size.width >= 1000 && size.width < 1350
      ? setLayout({
          ...layout,
          width: 0.55 * size.width,
          height: 0.5 * size.width,
          font: { ...layout.font, size: 14 },
          margin: {
            l: 100,
            r: 70,
            t: 80,
            b: 80,
            pad: 10,
            autoexpand: true,
          },
        })
      : setLayout({ ...layout });
    size.width >= 1350
      ? setLayout({
          ...layout,
          width: 0.55 * size.width,
          height: 0.5 * size.width,
          font: { ...layout.font, size: 16 },
          margin: {
            l: 100,
            r: 70,
            t: 80,
            b: 80,
            pad: 10,
            autoexpand: true,
          },
        })
      : setLayout({ ...layout });
  }, [useWindowSize()]);

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
