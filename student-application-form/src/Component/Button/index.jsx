import React from "react";
import "./index.css";

const Button = ({ text, onClick, disabled, className }) => {
  return (
    <button
      className={`bton ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
