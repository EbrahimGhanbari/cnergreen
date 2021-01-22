import React, { useEffect } from "react";

import TopNavbar from "../TopNavBar/TopNavBar";
import Footer from "../Footer";
import TextImage from "../Utilities/TextImage";
import Cover from "../Utilities/Cover";

import "./CnerFoam.scss";

const webData = require("../../data/content.json").CnerFoam_Page;
export default function (props) {
  const content = webData.content;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopNavbar />
      <Cover
        img={webData.cover.img}
        title={webData.cover.title}
        text={webData.cover.text}
      />
      <TextImage
        styleMode={"extra_space"}
        direction={"left"}
        content={content.e1}
      />
      <TextImage
        // onEnterViewport={() => console.log("enter")}
        direction={"right"}
        content={content.e2}
      />
      <Footer />
    </div>
  );
}
