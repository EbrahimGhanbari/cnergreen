import React from "react";

import "./TextGraph.scss";

import Plotly from "../Utilities/Plotly";

export default function TextGraph({ content, direction, layout, data }) {
  return (
    <div className={`textImagContainer ${direction}`}>
      <div className="textImagSubContainer">
        <div className="textImagTitle">
          <hr></hr>
          {content.text[0]}
          <hr></hr>
        </div>
        <div className="textImagContent">{content.text[1]}</div>
      </div>

      <div>
        <Plotly data={data} layout={layout} />
      </div>
    </div>
  );
}
