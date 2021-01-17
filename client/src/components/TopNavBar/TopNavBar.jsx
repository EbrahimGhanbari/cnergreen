import "./TopNavBar.scss";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import LaptopNavBar from "./LaptopNavBar";

export default function (props) {
  console.log(window.innerWidth);
  return window.innerWidth <= 540 ? <MobileNavBar /> : <LaptopNavBar />;
}
