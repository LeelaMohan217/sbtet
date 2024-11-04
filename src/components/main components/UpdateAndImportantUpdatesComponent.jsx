import React from "react";
import ComponentForNewUpdates from "../ComponentForNewUpdates";
import ImportantUpdates from "../ImportantUpdates";

const UpdateAndImportantUpdatesComponent = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-start space-x-10">
          <div className="col-span-2">
            <ComponentForNewUpdates />
          </div>
          <div className="col-span-1">
            <ImportantUpdates />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateAndImportantUpdatesComponent;
