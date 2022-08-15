import React from "react";

import "./Input.scss";

const Input = ({ type, placeholder }) => {
  return <input type={type} className="form-input" placeholder={placeholder} />;
};

export default Input;
