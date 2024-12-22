import React from "react";

function CheckBox({ text, onChange, checked, name }) {
  return (
    <div>
      {" "}
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={onChange}
          checked={checked}
          name={name}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          {text}
        </label>
      </div>
    </div>
  );
}

export { CheckBox };
