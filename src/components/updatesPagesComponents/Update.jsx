import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Update = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch("https://royalblue-fox-884927.hostingersite.com/data/updates.json")
      .then((response) => response.json())
      .then((data) => setUpdates(data.updates))
      .catch((error) => console.error("Error fetching updates:", error));
  }, []);

  return (
    <div>
      {updates.map((update) => (
        <div key={update.id} className="flex flex-col my-2">
          <p className="text-sm">{update.datePosted}</p>
          <Link
            to={`/updatedetails/${update.id}`}
            target="_blank"
            className="hover:text-indigo-600"
          >
            {update.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Update;
