import "./TopNavBar.scss";
import React, { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import LaptopNavBar from "./LaptopNavBar";

export default function TopNavBar(props) {
  console.log(window.innerWidth);
  return window.innerWidth <= 540 ? <MobileNavBar /> : <LaptopNavBar />;
}
