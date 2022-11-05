import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Bukucita from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Header />

        <div className="w-full h-full pt-16 pb-16 lg:pb-8 lg:container lg:mx-auto lg:flex">
          <Navigation />
          <Bukucita />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
