import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="bg-indigo-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center ml-5">
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            <div className="inline-flex ">
              <p className="w-full text-3xl font-bold text-rose-500">Spo</p>
              <p className="w-full text-3xl font-bold text-white">mix</p>
            </div>
          </span>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="bg-indigo-900 text-white hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >
            Logout
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center  bg-indigo-950  justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:hover:text-rose-500  md:p-0 "
                aria-current="page"
                onClick={() => navigate("/home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-rose-500 md:p-0"
                onClick={() => navigate("/newgroup")}
              >
                My Groups
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
