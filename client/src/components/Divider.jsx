/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Footer(props) {
  const height = { height: props.height };
  return (
    <div style={height} className="divider" ref={props.forwardedRef}></div>
  );
}
