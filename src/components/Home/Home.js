import React from "react";
import "./Home.css"
import StudentRegistrationForm from "../Admission module/Student registration/StudentRegistration";

import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home-cointainer">
      <StudentRegistrationForm />
    </div>
  );
}

export default Home;
