import React from "react";
import { FaBookOpen, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTE_BUKUQU, ROUTE_PUSTAKA } from "../constant/routes";

const Navigation = () => {
  return (
    <React.Fragment>
      <div className="w-full h-16 fixed bottom-0 flex bg-white lg:hidden">
        <div className="w-full container mx-auto flex items-center justify-around">
          <Link to={ROUTE_PUSTAKA}>
            <div className="px-2 py-1 rounded-md flex flex-col items-center cursor-pointer hover:bg-violet-100">
              <FaBookOpen className="text-lg" />
              <span className="text-sm">Pustaka</span>
            </div>
          </Link>
          <Link to={ROUTE_BUKUQU}>
            <div className="px-2 py-1 rounded-md flex flex-col items-center cursor-pointer hover:bg-violet-100">
              <FaHeart className="text-lg" />
              <span className="text-sm">Bukuqu</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="font-bold text-lg w-1/6 hidden lg:block flex-1">
        <div className="py-8 pr-5 flex flex-col justify-evenly gap-3">
          <Link to={ROUTE_PUSTAKA}>
            <div className="py-2 px-3 rounded-md flex gap-3 items-center cursor-pointer hover:bg-violet-100">
              <FaBookOpen />
              Pustaka
            </div>
          </Link>
          <Link to={ROUTE_BUKUQU}>
            <div className="py-2 px-3 rounded-md flex gap-3 items-center cursor-pointer hover:bg-violet-100">
              <FaHeart />
              Bukuqu
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
