import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/SignIn/Login";
import SignUp from "./components/Auth/SignUp/SignUp"
import { auth } from "./components/FirebaseAuth";
import "./App.css";
import StudentRegistrationForm from "./components/Admission module/Student registration/StudentRegistration";
import HorizontalLinearStepper from "./components/Admission module/Admission form/HorizontalLinearStepper/HorizontalLinearStepper";
import AcadamicQualificationDetail from "./components/Admission module/Admission form/Acadamic&QualificationDetail/AcadamicQualificationDetail";
import DocumentUploadForm from "./components/Admission module/Admission form/Document details/DocumentUploadForm";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home name={userName} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="studentRegistrationForm" element={<StudentRegistrationForm />} />
          <Route path="horizontalLinearStepper" element={<HorizontalLinearStepper />} />
          <Route path="acadamicQualificationDetail" element={<AcadamicQualificationDetail />} />
          <Route path="documentUploadForm" element={<DocumentUploadForm />} />
        </Routes>
      </Router>
    </div>
  );
}

function NotFound() {
  return <h1>Page not found</h1>;
}

export default App;
