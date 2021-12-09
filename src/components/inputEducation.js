import React from "react";
import EducationBlock from './educationBlock.js';

const InputEducation = (props) => {
  const { state, handleChange } = props;

  let eduBlocks = [];

    for(let i=0; i<state.education.length;i++){
        eduBlocks[i]=
        {
            name:state.education[i].name,
            title:state.education[i].title,
            startDate:state.education[i].startDate,
            endDate:state.education[i].endDate,
            i:i,
            key:"eduBlock"+i
        };
    }

  return (
      <div>
        {eduBlocks.map( (block)=> <EducationBlock 
        name={block.name} title={block.title} startDate={block.startDate} endDate={block.endDate}
        i={block.i} handleChange={handleChange} key={block.key}/>)}
    </div>
  );
};

export default InputEducation;