import React from "react";

const TextArea = ({ heading, value, onChange, placeholder, style, name }) => {
  return (
    <div className="textarea-container">
      <textarea
        className="custom-textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={style}
        name={name}
      ></textarea>
    </div>
  );
};

export { TextArea };
