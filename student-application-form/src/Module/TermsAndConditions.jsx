import React, { useState } from "react";
import { CheckBox } from "../Component";

function TermsAndConditions({ handleInputChange, setPolicy, policy }) {
  const handleCheckBox = (e) => {
    setPolicy((prev) => !prev);
  };

  return (
    <div>
      <label className={`input-label mb-2`}>Terms and Conditions</label>
      <div className="border border-dark p-3 mb-3">
        <small>
          It is required for the student to clear an entrance test and interview
          to be admitted to the school.
        </small>
        <small>
          I agree with the terms and conditions of the school and declare that
          the information provided above is correct.
        </small>
      </div>
      <CheckBox
        text={"I accept the Terms and Conditions."}
        onChange={handleCheckBox}
        name={"condition"}
        checked={policy}
      />
    </div>
  );
}

export default TermsAndConditions;
