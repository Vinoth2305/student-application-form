import React from "react";

const Input = ({ heading, type, className, style, onChange, value, name }) => {
  return (
    <div className="input-container mb-3">
      <label className={`input-label ${className}`}>{heading}</label>
      <div className="input-box">
        <input
          type={type}
          name={name}
          id="student-name"
          className="input-field"
          placeholder={`Enter ${heading}`}
          style={style}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export { Input };
