import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("https://royalblue-fox-884927.hostingersite.com/data/jobs.json")
      .then(response => response.json())
      .then(data => {
        const selectedJob = data.jobs.find(job => job.id === parseInt(id));
        setJob(selectedJob);
      })
      .catch(error => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
          <h1 className="text-center font-bold text-3xl bg-indigo-800 rounded-sm p-10 text-white">
            {job.post.postNameHeading}
          </h1>
          <div className="flex flex-col space-y-8 my-10">
            <div className="flex flex-col space-y-4">
              <h1><strong>Post Name:</strong> {job.post.postName}</h1>
              <p><strong>Recruitment Board:</strong> {job.recruitmentBoard}</p>
              <p><strong>Qualification:</strong> {job.qualification}</p>
              <p><strong>Number of Posts:</strong> {job.numberOfPosts.job1Posts}</p>
              <p><strong>Last Date to Apply:</strong> {job.dates.lastDateToApplyOnlineAndPaymentOfFee}</p>
            </div>
            <div>
              <p className="text-lg"><strong>Detailed Information:</strong> {job.descriptionOfTheJob}</p>
            </div>
            <div className="border-2 p-10">
              <p className="text-center text-xl"><strong>Important Links:</strong></p>
              <table className="w-full mt-4">
                <tbody>
                  <tr className="border-b">
                    <td className="p-4">Apply Online</td>
                    <td className="p-4">
                      <a href={job.links.applyOnline} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">Click Here</a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Notification</td>
                    <td className="p-4">
                      <a href={job.links.notification} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">Click Here</a>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">More Info</td>
                    <td className="p-4">
                      <a href={job.moreInfo} target="_blank" rel="noopener noreferrer" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200">Click Here</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
