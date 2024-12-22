import React from "react";
import { Input, RadioButton } from "../Component";

const StudentInfoForm = ({ formData, handleInputChange, gen }) => {
  return (
    <div className="form-step">
      <div className="col-12">
        <Input
          heading="Student Name"
          name="sName"
          onChange={handleInputChange}
          value={formData.sName}
          type="text"
        />
      </div>

      <div className="col-12">
        <Input
          heading={"Date of Birth"}
          type={"date"}
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
      </div>
      <label className={`input-label`}>Gender</label>
      <div className="col-6 d-flex justify-content-between pt-1 align-items-center">
        {gen.map((items, index) => (
          <div key={index}>
            <RadioButton
              text={items}
              name={"gender"}
              onChange={handleInputChange}
              value={items}
              checked={formData.gender === items}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentInfoForm;
