import React from "react";

const Form = ({ title, firstField, secondField, thirdField, btnText }) => {
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
              placeholder="First Name"
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2">
              {secondField}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={secondField}
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg mb-2">
              {thirdField}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-all duration-300 focus:bg-green-700"
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
