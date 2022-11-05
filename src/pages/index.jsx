import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_BUKUQU, ROUTE_DETAIL, ROUTE_PUSTAKA } from "../constant/routes";
import Bukuqu from "./Bukuqu";
import Detail from "./detail";
import NotFound from "./notFound";
import Pustaka from "./Pustaka";

const Bukucita = () => {
  return (
    <div className="container mx-auto lg:w-5/6 h-full">
      <Routes>
        <Route path={ROUTE_PUSTAKA} element={<Pustaka />} />
        <Route path={ROUTE_BUKUQU} element={<Bukuqu />} />
        <Route path={ROUTE_DETAIL} element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Bukucita;
