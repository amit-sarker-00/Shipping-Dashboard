import React, { useState } from "react";
import { BiArrowBack, BiMeteor } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import cart from "../../assart/Chart.png";
import DashboardMenu from "../../DashboardMenu/DashboardMenu";
import DashBoardTopMenu from "../../DashBordTopMenu/DashBoardTopMenu";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex ">
      <div className="">
        <div
          className={`${open ? "w-80" : "w-20"} duration-300 h-screen
        bg-blue-900 relative `}
        >
          {/* logo and name  */}
          <div>
            <BiArrowBack
              className={`absolute cursor-pointer -right-3 top-9 border-2 border-yellow-500 text-3xl text-black bg-yellow-500 rounded-full p-1 ${
                !open && "rotate-180"
              } `}
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="flex gap-x-3 items-center p-5 pt-8 bg-yellow-500">
            <BiMeteor
              className={`cursor-pointer duration-500 text-black text-3xl `}
            />
            <h1
              className={`text-black  font-medium text-sm duration-300 ${
                !open && "hidden"
              }`}
            >
              Dev E-commerce
            </h1>
            <p className={`bg-white px-1 font-bold ${!open && "hidden"}`}>
              Admin
            </p>
          </div>
          {/* all menu  */}
          <DashboardMenu open={open} />
        </div>
      </div>
      <div className=" text-2xl font-semibold  h-screen w-full ">
        {/* all outlet  */}
        <div className="w-full ">
          <DashBoardTopMenu />
        </div>
        <div className="p-7">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
