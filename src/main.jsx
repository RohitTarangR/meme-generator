import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home.jsx";
import MemeCard, { memeDataLoader } from "./Components/Card/MemeCard.jsx";
import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/Login/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: memeDataLoader, 
    children: [
      {
        path: "",
        element: <MemeCard />,
        loader: memeDataLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
