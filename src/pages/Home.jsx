import React from "react";

import ComponentForNewUpdates from "../components/ComponentForNewUpdates";
import Navbar from "../components/Navbar";
import UpdateAndImportantUpdatesComponent from "../components/main components/UpdateAndImportantUpdatesComponent";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8">
        <h1 className="text-2xl md:text-3xl text-indigo-800 font-semibold py-6 text-center md:text-left">
          SBTET FAST Updates - Get All Latest SBTET Updates.
        </h1>
        <p className="text-neutral-800 text-base md:text-lg text-center md:text-left">
          Welcome to SBTET AP TS Fast Updates, your Fast and Genuine Information
          Portal. Get the Latest Updates, Notifications, Time Tables, Results,
          Syllabus Books, Lab Manuals, and Previous Question Papers for SBTET AP
          and TS. Stay informed with accurate and timely updates for all
          SBTET-related information.
        </p>
      </div>
      <div>
        <UpdateAndImportantUpdatesComponent />
      </div>
    </>
  );
};

export default Home;
