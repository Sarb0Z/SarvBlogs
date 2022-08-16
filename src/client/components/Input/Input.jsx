import React from "react";

import "./Input.scss";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      className="form-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
