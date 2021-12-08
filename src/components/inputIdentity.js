import React from "react";

const InputIdentity = (props) => {
  const { identity, handleChange } = props;

  return (
        <input type="text" id="firstNameInput" onChange={handleChange} value={identity.firstName}/>
  );
};

export default InputIdentity;