import React from "react";
import { DropDown, FilePicker, TextArea } from "../Component";

function StudentStudyDetails({ formData, handleInputChange }) {
  const education = [
    "Central Board of Secondary Education (CBSE)",
    "Council for the Indian School Certificate Examinations (CISCE)",
    "National Institute of Open Schooling (NIOS)",
    "State Board",
  ];
  return (
    <div className="mt-4">
      <label className={`input-label`}>Birth Certificate</label>
      <FilePicker
        heading={"Birth Certificate"}
        onFileChange={handleInputChange}
        value={formData.boc}
        name={"boc"}
      />
      <div className="col-12">
        {" "}
        <label className={`input-label`}>
          Any medical condition to mention about the student?
        </label>
        <TextArea
          value={formData.medicalCondition}
          onChange={handleInputChange}
          mandatory={true}
          name={"medicalCondition"}
        />
        <DropDown
          options={education}
          heading={"Education Board"}
          value={formData.education}
          onChange={handleInputChange}
          name={"education"}
        />
      </div>
    </div>
  );
}

export default StudentStudyDetails;
