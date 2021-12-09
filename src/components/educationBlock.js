import React from "react";

const EducationBlock = (props) => {
    const { name, title, startDate, endDate, i, handleChange} = props;

    return (
        <div>
            <br/>
            Name = <input type="text" id={`EduNameInput${i}`} 
            value={name} onChange={handleChange} index={i} name="name"/>
            <br/>
            Title = <input type="text" id={`EduTitleInput${i}`} 
            value={title} onChange={handleChange} index={i} name="title"/>
            <br/>
            Start Date = <input type="text" id={`EduStartDateInput${i}`} 
            value={startDate} onChange={handleChange} index={i} name="startDate"/>
            <br/>
            End Date = <input type="text" id={`EduEndDateInput${i}`} 
            value={endDate} onChange={handleChange} index={i} name="endDate"/>
            <br/>
      </div>
    );
  };
  
  export default EducationBlock;