import React from 'react';
import './Main.scss';

import SectionOne from './SectionOne';
import SectionGrid from './SectionGrid';
import SectionDescrip from './SectionDescrip';

function Main (props) {

  // this is the grid input for different sections
  const gridInputTop = {
    e1: ["Enhance Oil Recovery"],
    e2: ["Optimize Production"],
    e3: ["Request Demo"]
  }

  const gridInputButtom = {
    e1: ["Analytics"],
    e2: ["About Us"],
    e3: ["Contact Us"]
  }


  return (
    <div>
      <SectionOne />
      <SectionGrid gridInput = {gridInputTop} />
      <SectionDescrip direction = {"left"}/>
      <SectionDescrip direction = {"right"}/>
      <SectionGrid gridInput = {gridInputButtom} />
    </div>
  );

}

export default Main;
