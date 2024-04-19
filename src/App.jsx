// App.js
import React from "react";
import Home from "./Home/MemeCard";
import { Header } from "./Navbar/Header";


function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Header />
    <div className="flex">
    <Home />
    </div>
    </>
  );
}

export default App;
