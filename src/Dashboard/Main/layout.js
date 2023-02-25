import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Shared/Navbar/Navbar";

const layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default layout;
