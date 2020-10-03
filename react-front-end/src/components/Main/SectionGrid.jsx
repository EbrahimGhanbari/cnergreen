import React from 'react';
import './SectionGrid.scss';




function SectionOne ({gridInput}) {

  return (
    <div className="gridContainer">
        <div>
            <div className="imgGrid"></div>
            <div className="gridItemText"> { gridInput.e1[0] }</div>
        </div>
        <div>
            <div className="imgGrid"></div>
            <div className="gridItemText">{ gridInput.e2[0] }</div>
        </div>
        <div>
            <div className="imgGrid"></div>
            <div className="gridItemText">{ gridInput.e3[0] }</div>
        </div>
        
    </div>
  );

}

export default SectionOne;
