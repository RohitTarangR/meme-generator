import React from "react";
import { Link } from "react-router-dom";

const FormAuth = ({ title, firstField, secondField, thirdField, btnText, auth, authText }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md rounded-lg p-8 duration-300 drop-shadow-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2">
              {firstField}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={firstField}
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">
              {secondField}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={secondField}
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2">
              {thirdField}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={thirdField}
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-all duration-300 focus:bg-green-700"
          >
            {authText}
          </button>
          
            <p className="text-center">
              {auth}
              <Link to={`/${authText}`}>
              <span className="text-blue-500 font-semibold"> {authText} </span>
              </Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default FormAuth;
