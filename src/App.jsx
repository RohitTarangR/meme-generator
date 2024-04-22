// App.js
import React from "react";
import { Header } from "./Components/Navbar/Header";
import Home from "./Components/Home/Home";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
    <Home />
    <Outlet />
    </>
  );
}

export default App;
