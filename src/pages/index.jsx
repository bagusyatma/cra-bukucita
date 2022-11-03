import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_BUKUQU, ROUTE_PUSTAKA } from "../constant/routes";
import Bukuqu from "./Bukuqu";
import Detail from "./detail";
import NotFound from "./notFound";
import Pustaka from "./Pustaka";

const Bukucita = () => {
  return (
    <div className="lg:w-4/5 pt-16 lg:pt-0 w-full h-full lg:px-3">
      <Routes>
        <Route path={ROUTE_PUSTAKA} element={<Pustaka />} />
        <Route path={ROUTE_BUKUQU} element={<Bukuqu />} />
        <Route path={`${ROUTE_PUSTAKA}/:id`} element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <div className="bg-red-300 h-full overflow-auto"></div> */}
    </div>
  );
};

export default Bukucita;
