import React from "react";

const InputIdentity = (props) => {
  const { state, handleChange } = props;

  return (
      <div>
        <input type="text" id="firstNameInput" name="firstName" onChange={handleChange} value={state.firstName}/>
        <br/>
        <input type="text" id="lastNameInput" name="lastName" onChange={handleChange} value={state.lastName}/>
        <br/>
        <input type="text" id="emailInput" name="email" onChange={handleChange} value={state.email}/>
        <br/>
        <input type="text" id="phoneInput" name="phone" onChange={handleChange} value={state.phone}/>
        <br/>
        <input type="text" id="addressInput" name="address" onChange={handleChange} value={state.address}/>
        <br/>
    </div>
  );
};

export default InputIdentity;