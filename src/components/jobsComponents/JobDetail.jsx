import React from "react";
import { Link } from "react-router-dom";

const JobDetail = ({ job }) => {
  return (
    <div className="flex flex-col space-y-4 border-2 rounded-md shadow-md p-10">
      <h1><strong>Post Name: {job.post.postName}</strong></h1>
      <p><strong>Recruitment Board:</strong> {job.recruitmentBoard}</p>
      <p><strong>Qualification:</strong> {job.qualification}</p>
      <p><strong>Number of Posts:</strong> {job.numberOfPosts.job1Posts}</p>
      <p><strong>Last Date to Apply:</strong> {job.dates.lastDateToApplyOnlineAndPaymentOfFee}</p>
      <div>
        <Link
          to={`/jobdetails/${job.id}`}
          target="_blank"
          className="bg-indigo-500 text-white p-2 rounded-sm shadow-sm mt-4"
        >
          More Info
        </Link>
      </div>
      <p className="text-xs">{job.dates.datePosted}</p>
    </div>
  );
};

export default JobDetail;
