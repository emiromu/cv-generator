import React from "react";
import './../styles/input.css';

import InputIdentity from './inputIdentity.js';
import InputEducation from './inputEducation.js';
import InputExperience from './inputExperience.js';

const InputForm = (props) => {
  const { state, 
    handleIdentityChange,
    handleEducationChange, addEducation, deleteEducation,
    handleExperienceChange, addExperience, deleteExperience } = props;

  return (
        <form>
        Input Form.
        <br/><br/>
        Identity:
        <InputIdentity state={state} handleChange={handleIdentityChange}/>

        <br/>
        Education:
        <InputEducation state={state} handleChange={handleEducationChange}/>
        <input type='button' id='addEducation' onClick={addEducation}></input>
        <input type='button' id='deleteEducation' onClick={deleteEducation}></input>
        <br/>

        <br/>
        Experience:
        <InputExperience state={state} handleChange={handleExperienceChange}/>
        <input type='button' id='addExperience' onClick={addExperience}></input>
        <input type='button' id='deleteExperience' onClick={deleteExperience}></input>
        <br/>
        </form>
  );
};

export default InputForm;