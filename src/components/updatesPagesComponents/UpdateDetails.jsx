import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const UpdateDetails = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState(null);

  useEffect(() => {
    fetch("https://royalblue-fox-884927.hostingersite.com/data/updates.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedUpdate = data.updates.find((u) => u.id === parseInt(id));
        setUpdate(selectedUpdate);
      })
      .catch((error) => console.error("Error fetching update details:", error));
  }, [id]);

  if (!update) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
        <h1 className="text-center font-bold text-3xl bg-indigo-800 rounded-sm p-10 text-white">
          {update.title}
        </h1>
        <div className="flex flex-col space-y-8 my-10">
          <div className="flex flex-col space-y-4">
            <p><strong>Date Posted:</strong> {update.datePosted}</p>
            <p className="text-lg"><strong>Details:</strong> {update.detailedUpdate}</p>
          </div>
          <div className="border-2 p-10">
            <p className="text-center text-xl"><strong>Important Links:</strong></p>
            <table className="w-full mt-4">
              <tbody>
                {update.importantLinks && update.importantLinks.companyWebsite && (
                  <tr className="border-b">
                    <td className="p-4">Company Website</td>
                    <td className="p-4">
                      <a href={update.importantLinks.companyWebsite} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">Visit</a>
                    </td>
                  </tr>
                )}
                {update.importantLinks && update.importantLinks.jobDescription && (
                  <tr className="border-b">
                    <td className="p-4">Job Description</td>
                    <td className="p-4">
                      <a href={update.importantLinks.jobDescription} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">View</a>
                    </td>
                  </tr>
                )}
                {update.importantLinks && update.importantLinks.applicationForm && (
                  <tr className="border-b">
                    <td className="p-4">Application Form</td>
                    <td className="p-4">
                      <a href={update.importantLinks.applicationForm} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">Apply Here</a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDetails;
