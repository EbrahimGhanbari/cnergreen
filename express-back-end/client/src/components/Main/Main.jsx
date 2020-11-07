import React from 'react';
import './Main.scss';

import SectionOne from './SectionOne';
import SectionGrid from './SectionGrid';
import SectionDescrip from './SectionDescrip';
import DemoPlotly from './DemoPlotly';

function Main (props) {

  // this is the grid input for different sections
  const gridInputTop = {
    e1: ["Enhance Oil Recovery"],
    e2: ["Optimize Production"],
    e3: ["Request Demo"]
  };

  const gridInputButtom = {
    e1: ["Analytics"],
    e2: ["About Us"],
    e3: ["Contact Us"]
  };

  const content = {
    e1: {
      img: "",
      text: [
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing",
        "Lorem Ipsum is simply dummy text of the printing"]
    },
    e2: {
      img: "",
      text: [
        "sec 2 Lorem Ipsum is simply dummy text of the printing",
        "sec 2 Lorem Ipsum is simply dummy text of the printing",
        "sec 2 Lorem Ipsum is simply dummy text of the printing"]
    }
  };


  return (
    <div>
      <SectionOne />
      <SectionGrid gridInput = {gridInputTop} />
      <SectionDescrip direction = {"left"} content = {content.e1}/>
      <SectionDescrip direction = {"right"} content = {content.e2}/>
      <SectionGrid gridInput = {gridInputButtom} />
      {/* <DemoPlotly /> */}
    </div>
  );

}

export default Main;
