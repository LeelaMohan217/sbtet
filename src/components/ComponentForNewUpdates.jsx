import React from "react";
import { Link } from "react-router-dom";
import Update from "./updatesPagesComponents/update";

const ComponentForNewUpdates = () => {
  return (
    <div className="border-2 rounded-md shadow-md">
      <div className="p-10 space-y-6">
        <Update />
        <Link to="/" className="mt-4 px-4 py-2 bg-indigo-800 text-white rounded-sm hover:bg-indigo-900 text-xs">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ComponentForNewUpdates;
