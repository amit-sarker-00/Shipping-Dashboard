import React from "react";
import { BiSearch, BiBellMinus } from "react-icons/bi";
import { Link } from "react-router-dom";

const DashBoardTopMenu = () => {
  return (
    <div>
      <div className="bg-sky-200 w-full p-1 flex items-center justify-between ">
        <div className="lg:flex hidden items-center bg-gray-100 w-96">
          <BiSearch className="p-0.5 m-2" />
          <input type="text" className="w-full outline-none p-1 text-sm" />
        </div>
        <div className="pr-5 pt-1 flex items-center gap-5">
          <div className=" relative">
            <BiBellMinus className="text-xl" />
            <p className="absolute -top-3 pt-0.5 px-2 rounded-full -right-3 text-xs bg-yellow-500">
              3
            </p>
          </div>
          <Link className="flex items-center gap-5">
            <div>
              <img
                className="w-10 object-cover h-10 rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44GEBI3itkGmqDQH2nEgzkTvwISd_ONOwkg&usqp=CAU"
                alt=""
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">Abul wahid hossain</p>
              <p className="text-xs text-gray-500">Abul@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardTopMenu;
