import React from "react";
import Update1 from "./importantUpdates/Update1";

const ImportantUpdates = () => {
  // Array of update components
  const updates = [
    <Update1 key="1" />,
    <Update1 key="2" />,
    <Update1 key="3" />,
    <Update1 key="4" />,
    <Update1 key="5" />,
    <Update1 key="6" />,
    <Update1 key="7" />,
    <Update1 key="8" />,
    <Update1 key="9" />,
    <Update1 key="10" />,
  ];

  return (
    <div className="border-2 rounded-md shadow-md p-10">
      <h1 className="text-center font-medium text-red-500 whitespace-nowrap">
        Important Updates
      </h1>
      {/* Scrollable container with custom scrollbar */}
      <div className="space-y-4 mt-4 max-h-64 overflow-y-scroll no-scrollbar">
        {updates.map((update) => (
          <div key={update.key}>{update}</div>
        ))}
      </div>
      <div className="mt-2">
        <p className="font-thin">
          For more updates scrolldown 
        </p>
      </div>
    </div>
  );
};

export default ImportantUpdates;
