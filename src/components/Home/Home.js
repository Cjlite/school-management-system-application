import React from "react";
import "./Home.css"
import Header from "../Heder/Header";
import Navbar from "../NavBar/Navbar";

import { Link, Outlet } from "react-router-dom";

function Home(props) {
  return (
    <div className="home-cointainer">
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Home;
