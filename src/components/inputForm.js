import React from "react";
import './../styles/input.css';

import InputIdentity from './inputIdentity.js';

const InputForm = (props) => {
  const { identity, handleChange } = props;

  return (
        <form>
        Input Form.
        <InputIdentity identity={identity} handleChange={handleChange}/>
        </form>
  );
};

export default InputForm;