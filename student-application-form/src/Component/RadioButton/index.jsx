import React from "react";
import "./index.css";

function RadioButton({ text, onChange, checked, value, name }) {
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id="flexRadioDefault1"
          onChange={onChange}
          checked={checked}
          value={value}
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault1"
          style={{ fontSize: "18px", marginTop: "-15px" }}
        >
          {text}
        </label>{" "}
      </div>
    </>
  );
}

export { RadioButton };
