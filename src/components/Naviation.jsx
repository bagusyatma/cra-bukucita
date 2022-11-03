import React from "react";
import { FaBookmark, FaBookOpen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTE_BUKUQU, ROUTE_PUSTAKA } from "../constant/routes";

const Naviation = () => {
  return (
    <div className="font-bold text-lg lg:w-1/5 bg-white shadow lg:shadow-none lg:bg-transparent">
      <div className="py-2 lg:py-8 lg:px-5 flex lg:flex-col justify-evenly lg:gap-3">
        <Link to={ROUTE_PUSTAKA}>
          <div className="py-2 px-3 rounded-md flex gap-3 items-center cursor-pointer hover:bg-violet-100">
            <FaBookOpen />
            Pustaka
          </div>
        </Link>
        <Link to={ROUTE_BUKUQU}>
          <div className="py-2 px-3 rounded-md flex gap-3 items-center cursor-pointer hover:bg-violet-100">
            <FaBookmark />
            Bukuqu
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Naviation;
