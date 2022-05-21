import React from "react";
import { Link } from "react-router-dom";

const Footer05 = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ backgroundColor: "#caced1" }}
    >
      <div className="container p-6 block mx-auto">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
              alt=""
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
              alt=""
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
              alt=""
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-full rounded-md shadow-lg"
              alt=""
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-full rounded-md shadow-lg"
              alt=""
            />
          </div>
          <div className="lg:mb-0 mb-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-full rounded-md shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2021 Copyright:
        <Link className="text-white" to="https://tailwind-elements.com/">
          Tailwind Elements
        </Link>
      </div>
    </footer>
  );
};

export default Footer05;
