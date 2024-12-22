import React, { useState } from "react";
import { showToast } from "../ShowToast";
import "./index.css";

const FilePicker = ({
  heading,
  onFileChange,
  maxFiles = 1,
  allowedExtensions = [".pdf", ".docx"],
  maxSize = 2 * 1024 * 1024,
  errorMessage = "You can only upload 1 file.",
  name,
  value,
}) => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState("");
  const handleFileChange = (e) => {
    const fil = e;
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      onFileChange(fil);
    }
  };
  const removeFile = () => {
    setUploadedFile(null);
    onFileChange(null);
  };

  return (
    <div className="file-upload-container">
      <div className={`upload-box ${uploadedFile ? "uploaded" : ""}`}>
        {!uploadedFile ? (
          <label className="upload-label">
            <input
              type="file"
              onChange={handleFileChange}
              className="upload-input"
              name={name}
              accept={allowedExtensions.map((ext) => ext).join(", ")}
            />
            <div className="d-flex justify-content-between align-items-center">
              <p
                className="choose-file fs-6 fw-500 mb-0"
                style={{ color: "black" }}
              >
                Choose File
              </p>
              <i className="bi bi-upload text-dark"></i>
            </div>
          </label>
        ) : (
          <div className="uploaded-file-info">
            <span className="file-name">{uploadedFile.name}</span>
            <span className="file-size">
              {(uploadedFile.size / 1024).toFixed(1)} KB
            </span>
            <button className="remove-btn" onClick={removeFile}>
              ✖
            </button>
          </div>
        )}
      </div>
      {error && showToast(error, "error")}
    </div>
  );
};

export { FilePicker };
