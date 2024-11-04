import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 px-4 md:px-10 lg:px-20 py-4">
        <img src={logo} alt="Logo" className="w-16 lg:w-24 h-16 lg:h-24" />
        <h1 className="text-xl font-bold text-indigo-800 text-center md:py-0 py-4 md:text-2xl lg:text-3xl">
          STATE BOARD OF TECHNICAL EDUCATION & TRAINING - FAST UPDATES
        </h1>
      </div>
      <div className="bg-indigo-800">
        <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
          <ul className="flex flex-wrap justify-center md:justify-start items-center space-x-4 md:space-x-10 text-white font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/updates">Updates</a>
            </li>
            <li>
              <a href="/syllabus">Syllabus</a>
            </li>
            <li>
              <a href="/materials">Materials</a>
            </li>
            <li>
              <a href="/jobs">Jobs</a>
            </li>
            <li>
              <a href="/studentlist">Student List</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
