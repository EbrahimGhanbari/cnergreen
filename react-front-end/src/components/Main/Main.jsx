import React from 'react';
import './Main.scss';

import SectionOne from './SectionOne';
import SectionGrid from './SectionGrid';


function Main (props) {

  const gridInput = {
    e1: ["Enhance Oil Recovery"],
    e2: ["Optimize Production"],
    e3: ["Request Demo"]
  }


  return (
    <div>
      <SectionOne />
      <SectionGrid 
      gridInput = {gridInput} />
    </div>
  );

}

export default Main;
