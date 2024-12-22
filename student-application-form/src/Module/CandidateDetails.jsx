import React from "react";
import { useNavigate } from "react-router-dom";

function CandidateDetails() {
  let usersArray = JSON.parse(localStorage.getItem("userData")) || [];
  console.log(usersArray);
  let navigate = useNavigate();
  const NavigateBack = () => {
    navigate("/");
  };

  return (
    <div className="container pt-5">
      <div
        onClick={NavigateBack}
        className="d-flex align-items-center mb-4"
        style={{ cursor: "pointer" }}
      >
        <i className="bi bi-chevron-left me-1"></i>{" "}
        <h6 className="mb-0">Back</h6>
      </div>
      <h4 className="pb-1">Candidate List:</h4>
      <table className="table table-bordered table-responsive">
        <thead>
          <tr className="table-info">
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Birth Certificate</th>
            <th scope="col">Education</th>
            <th scope="col">Medical Condition</th>
          </tr>
        </thead>
        <tbody>
          {usersArray.map((items, index) => {
            console.log(items);

            return (
              <tr key={index} className="table-light">
                <th scope="row">{index + 1}</th>
                <td>{items.sName ? items.sName : "N/A"}</td>
                <td>{items.gender ? items.gender : "N/A"}</td>
                <td>{items.dob ? items.dob : "N/A"}</td>
                <td>{items.boc ? items.boc : "N/A"}</td>
                <td>{items.education ? items.education : "N/A"}</td>
                <td>
                  {items.medicalCondition ? items.medicalCondition : "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateDetails;
