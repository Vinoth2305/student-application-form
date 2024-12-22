import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CandidateDetails from "./Module/CandidateDetails.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/candidateDetails" element={<CandidateDetails />} />
    </Routes>

    <ToastContainer />
  </BrowserRouter>
);
