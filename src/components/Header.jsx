import React from "react";

const Header = () => {
  return (
    <div className="w-full h-16 fixed top-0 z-20 px-2">
      <div className="container mx-auto h-full text-3xl py-1 font-bold bg-white">
        <div className="h-full border-2 border-violet-100 bg-violet-100 px-5 rounded-xl flex items-center">
          buku<span className="text-yellow-300">cita</span>✨
        </div>
      </div>
    </div>
  );
};

export default Header;
