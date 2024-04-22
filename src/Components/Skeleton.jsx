import React from 'react'

const Skeleton = ({index}) => {
  return (
    <>
      <div className="rounded-md border bg-white animate-pulse" key={index}>
        <div
          style={{ height: "240px" }}
          className="rounded-t-md bg-gray-200"
        ></div>
        <div className="p-4">
          <div
            style={{ width: "50%", height: "1rem" }}
            className="mb-2 bg-gray-200 rounded-md"
          ></div>
          <div
            style={{ width: "100%", height: "0.75rem" }}
            className="bg-gray-200 rounded-md"
          ></div>
          <div className="flex justify-between items-center mt-4">
            <div
              style={{ width: "3rem", height: "1.5rem" }}
              className="bg-gray-200 rounded-md"
            ></div>
            <div
              style={{ width: "3rem", height: "1.5rem" }}
              className="bg-gray-200 rounded-md"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skeleton