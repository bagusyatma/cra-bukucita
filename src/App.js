import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Naviation from "./components/Naviation";
import Bukucita from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-50">
        <div className="w-full h-screen container mx-auto flex flex-col">
          <Header />

          <div className="w-full h-[88%] lg:pt-0">
            <div className="flex flex-col-reverse lg:flex-row h-full">
              <Naviation />
              <Bukucita />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
