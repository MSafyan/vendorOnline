import JobCard from './JobCard';
import jobs from './jobs';

const JobsList = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex gap-3 px-4 text-center">
        <h1 className="text-2xl font-medium">Available Jobs</h1>
        <div className="flex items-center justify-center rounded-xl bg-primary-500 px-2 text-sm text-white">
          {jobs.length} available
        </div>
      </div>

      <div className="thin-scrollbar-y mt-4 grid h-[80vh] grid-cols-2 gap-x-4 gap-y-6 overflow-auto px-4">
        {jobs.map((job) => (
          <JobCard job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
