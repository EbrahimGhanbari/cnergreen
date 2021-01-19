import "./TopNavBar.scss";
import React from "react";
import MobileNavBar from "./MobileNavBar";
import LaptopNavBar from "./LaptopNavBar";

export default function (props) {
  return window.innerWidth <= 539 ? <MobileNavBar /> : <LaptopNavBar />;
}
