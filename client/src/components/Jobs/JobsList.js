import JobCard from './JobCard';
import SkeletonCard from './SkeletonCard';
// import jobs from './jobs';
import { useQuery } from 'react-query';
import { JobAPI } from '../../api';
import LoaderIcon from '../../assets/icons/LoaderIcon';
import useQueryParams from '../../hooks/useQueryParams';

const JobsList = () => {
  const [searchParams] = useQueryParams();
  const { data: jobs, isLoading } = useQuery(
    ['jobs', { search: searchParams }],
    () => JobAPI.getJobs({ search: searchParams.q })
  );

  return (
    <div className="px-4 py-6">
      <div className="flex gap-3 px-4 text-center">
        <h1 className="text-2xl font-medium">Available Jobs</h1>
        {isLoading ? (
          <div className="flex items-center justify-center px-2 text-green-500">
            <LoaderIcon />
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-xl bg-primary-500 px-2 text-sm text-white">
            {jobs.length} available
          </div>
        )}
      </div>

      <div className="thin-scrollbar-y mt-4 grid h-[80vh] grid-cols-2 items-start gap-x-4 gap-y-6 overflow-auto px-4">
        {isLoading
          ? [...new Array(4)].map((_, index) => <SkeletonCard key={index} />)
          : jobs.map((job) => <JobCard job={job} key={job._id} />)}
      </div>
    </div>
  );
};

export default JobsList;
