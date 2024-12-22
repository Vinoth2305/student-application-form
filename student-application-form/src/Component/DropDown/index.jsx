import React, { useState } from "react";

function DropDown({
  options,
  defaultValue,
  heading,
  onChange,
  value,
  mandatory,
  name,
}) {
  return (
    <div className="mb-3">
      <label className="form-label fw-semibold">{heading}</label>
      {mandatory && <span className="text-danger">*</span>}

      <select
        className="form-select"
        aria-label="Default select example"
        value={value}
        name={name}
        onChange={onChange}
      >
        <option value="" disabled>
          Select an option
        </option>

        {options?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export { DropDown };
