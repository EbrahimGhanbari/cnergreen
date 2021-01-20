import React from "react";

import TopNavbar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import TextImage from "../Utilities/TextImage";
import Divider from "../Utilities/Divider";
import Cover from "../Utilities/Cover";

import "./CnerFoam.scss";

const webData = require("../../data/content.json").CnerFoam_Page;
export default function (props) {
  const content = webData.content;

  return (
    <div>
      <TopNavbar />
      <Cover
        img={webData.cover.img}
        title={webData.cover.title}
        text={webData.cover.text}
      />
      <Divider height={"50vh"}></Divider>
      <TextImage
        // onEnterViewport={}
        direction={"left"}
        content={content.e1}
      />
      <Divider height={"60vh"}></Divider>
      <TextImage
        // onEnterViewport={() => console.log("enter")}
        direction={"right"}
        content={content.e2}
      />
      <Divider height={"60vh"}></Divider>
      <Footer />
    </div>
  );
}
