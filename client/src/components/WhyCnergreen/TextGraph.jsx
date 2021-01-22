import React from "react";

import "./TextGraph.scss";

import Plotly from "../Utilities/Plotly";

export default function TextGraph({ content, direction, layout, data }) {
  return (
    <div className={`textGraphContainer ${direction}`}>
      <div className="textGraphSubContainer">
        <div className="textGraphTitle">
          <hr></hr>
          {content.text[0]}
          <hr></hr>
        </div>
        <div className="textGraphContent">{content.text[1]}</div>
      </div>

      <div>
        <Plotly data={data} layout={layout} />
      </div>
    </div>
  );
}
