import React from "react";
import ExperienceBlock from './experienceBlock.js';

const InputExperience = (props) => {
  const { state, handleChange } = props;

  let expBlocks = [];

    for(let i=0; i<state.experience.length;i++){
        expBlocks[i]=
        {
            name:state.experience[i].name,
            title:state.experience[i].title,
            tasks:state.experience[i].tasks,
            startDate:state.experience[i].startDate,
            endDate:state.experience[i].endDate,
            i:i,
            key:"expBlock"+i
        };
    }

  return (
      <div>
        {expBlocks.map( (block)=> <ExperienceBlock 
        name={block.name} title={block.title} tasks={block.tasks} startDate={block.startDate} endDate={block.endDate}
        i={block.i} handleChange={handleChange} key={block.key}/>)}
    </div>
  );
};

export default InputExperience;