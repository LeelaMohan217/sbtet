import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import JobDetail from "../components/jobsComponents/JobDetail";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://royalblue-fox-884927.hostingersite.com/data/jobs.json") 
      .then(response => response.json())
      .then(data => setJobs(data.jobs))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
        <h1 className="text-4xl font-bold">JOBS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {jobs.map(job => (
            <JobDetail key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
