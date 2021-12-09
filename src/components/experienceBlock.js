import React from "react";

const ExperienceBlock = (props) => {
    const { name, title, tasks, startDate, endDate, i, handleChange} = props;

    return (
        <div>
            <br/>
            Name = <input type="text" id={`ExpNameInput${i}`} 
            value={name} onChange={handleChange} index={i} name="name"/>
            <br/>
            Title = <input type="text" id={`ExpTitleInput${i}`} 
            value={title} onChange={handleChange} index={i} name="title"/>
            <br/>
            Tasks = <input type="text" id={`ExpTasksInput${i}`} 
            value={tasks} onChange={handleChange} index={i} name="tasks"/>
            <br/>
            Start Date = <input type="text" id={`ExpStartDateInput${i}`} 
            value={startDate} onChange={handleChange} index={i} name="startDate"/>
            <br/>
            End Date = <input type="text" id={`ExpEndDateInput${i}`} 
            value={endDate} onChange={handleChange} index={i} name="endDate"/>
            <br/>
      </div>
    );
  };
  
  export default ExperienceBlock;