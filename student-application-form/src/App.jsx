import React, { useEffect, useState } from "react";
import { ProgressBar, showToast } from "./Component";
import StudentInfoForm from "./Module/StudentInfoForm";
import "./App.css";
import Button from "./Component/Button";
import StudentStudyDetails from "./Module/StudentStudyDetails";
import TermsAndConditions from "./Module/TermsAndConditions";
import studying from "./assets/studying.png";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [gen, setGender] = useState(["Male", "Female", "Other"]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sName: "",
    dob: "",
    gender: "Male",
    boc: null,
    medicalCondition: "",
    education: "",
  });
  const [policy, setPolicy] = useState(false);

  console.log(formData, "formData");
  console.log(policy);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (formData.sName.length > 3 && formData.dob !== "") {
        if (currentStep < 3) setCurrentStep((prev) => prev + 1);
      } else {
        if (formData.sName.length < 3) {
          showToast("Name should be at least 3 characters", "error");
        } else if (formData.dob === "") {
          showToast("Please the Date of Birth", "error");
        }
      }
    } else if (currentStep === 2) {
      if (
        formData.boc !== null &&
        formData.medicalCondition !== "" &&
        formData.education !== ""
      ) {
        if (currentStep < 3) setCurrentStep((prev) => prev + 1);
      } else {
        if (formData.boc === null) {
          showToast("Please select the file", "error");
        } else if (
          formData.medicalCondition === "" &&
          formData.medicalCondition?.length >= 10
        ) {
          showToast("Description should be al least 10 chars", "error");
        } else if (formData.education === "") {
          showToast("Please select Education", "error");
        }
      }
    }
  };
  const submit = () => {
    if (!policy) {
      showToast("Agree the terms and condition", "info");
    } else {
      let usersArray = JSON.parse(localStorage.getItem("userData")) || [];
      usersArray.push(formData);
      localStorage.setItem("userData", JSON.stringify(usersArray));
      showToast("Submitted successfully", "success");
      setFormData({
        ...formData,
        sName: "",
        dob: "",
        gender: "Male",
        boc: null,
        medicalCondition: "",
        education: "",
      });
      setPolicy(false);
      setCurrentStep(1);
    }
  };
  let usersArray = JSON.parse(localStorage.getItem("userData")) || [];

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const navigateTolist = () => {
    navigate("/candidateDetails");
  };
  return (
    <div
      className="form-container card-container my-5"
      style={{ maxWidth: "850px", minHeight: "100vh" }}
    >
      {usersArray.length > 0 && (
        <div className="d-flex justify-content-end">
          <Button text={"Candidate List"} onClick={navigateTolist} />
        </div>
      )}
      <header
        className="header"
        style={{ textAlign: "center", paddingBottom: "20px" }}
      >
        <img src={studying} alt="imge-01" height={120} width={120} />

        <h2
          style={{
            fontWeight: "900",
            fontSize: "40px",
            color: "#0070c0",
            paddingBottom: "-50px",
          }}
        >
          School Application Form
        </h2>
        <p
          className="sub-heading"
          style={{ color: "#0070c0", fontSize: "20px" }}
        >
          This form collects information about the new student, such as the
          student's past school, age, health status, etc.
        </p>
      </header>
      <section className="section">
        <ProgressBar
          currentStep={currentStep}
          steps={[
            "Student Information",
            "Files Required",
            "Terms and Conditions",
          ]}
        />
        {currentStep === 1 && (
          <StudentInfoForm
            formData={formData}
            handleInputChange={handleInputChange}
            gen={gen}
          />
        )}
        {currentStep === 2 && (
          <StudentStudyDetails
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        {currentStep === 3 && (
          <TermsAndConditions setPolicy={setPolicy} policy={policy} />
        )}

        <div className="form-navigation col-12 d-flex justify-content-center mt-5">
          <Button
            text={"Back"}
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`${currentStep === 1 ? "d-none me-3" : "me-3"}`}
          />
          <Button
            text={"Next"}
            onClick={nextStep}
            className={`${currentStep === 3 ? "d-none" : ""}`}
            disabled={currentStep === 3}
          />
          <Button
            text={"Submit"}
            onClick={submit}
            className={`${currentStep === 3 ? "" : "d-none"}`}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
