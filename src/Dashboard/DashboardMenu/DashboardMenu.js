import React from 'react';
import { BiAlignJustify, BiBadge, BiError, BiShoppingBag, BiBarChartAlt, BiMessageRoundedError, BiPlus, BiClipboard, BiLineChartDown } from "react-icons/bi";
import { Link } from 'react-router-dom';

const DashboardMenu = ({ open }) => {
    return (
        <div className="flex flex-col mt-2 ml-4 text-white gap-y-2">
            <Link to="/home" className="flex items-center gap-5 ">
                <BiBadge className="text-xl" />
                <p className={`${!open && "hidden"} text-sm`}>Dashboard</p>
            </Link>
            <Link to="/allSeller" className="flex items-center gap-5 ">
                <BiAlignJustify className="text-xl" />
                <p className={`${!open && "hidden"} text-sm`}>All seller</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiError />
                <p className={`${!open && "hidden"} text-sm`}>AlL Reported item</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiShoppingBag />
                <p className={`${!open && "hidden"} text-sm`}>Orders</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiBarChartAlt />
                <p className={`${!open && "hidden"} text-sm`}>Marketing</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiMessageRoundedError />
                <p className={`${!open && "hidden"} text-sm`}>Inbox</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiPlus />
                <p className={`${!open && "hidden"} text-sm`}>Chat</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiClipboard />
                <p className={`${!open && "hidden"} text-sm`}>File Manager</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiLineChartDown />
                <p className={`${!open && "hidden"}`}>Analytics</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiLineChartDown />
                <p className={`${!open && "hidden"}`}>Analytics</p>
            </Link>
            <Link to="/allReportedItem" className="flex items-center gap-5">
                <BiLineChartDown />
                <p className={`${!open && "hidden"}`}>Analytics</p>
            </Link>
        </div>
    );
};

export default DashboardMenu;