import React, { useEffect, useState } from "react";
import { Header } from "../Navbar/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

function Home() {


  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  );
}

export default Home;
