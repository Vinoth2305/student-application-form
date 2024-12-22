import React from "react";

const ProgressBar = ({ currentStep, steps }) => {
  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <div key={index} className="progress-step">
          <div
            className={`circle ${currentStep === index + 1 ? "active" : ""} ${
              currentStep > index + 1 ? "completed" : ""
            }`}
          >
            {index + 1}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`line ${currentStep > index + 1 ? "completed" : ""}`}
            ></div>
          )}
          <div className="label">{step}</div>
        </div>
      ))}
    </div>
  );
};

export { ProgressBar };
