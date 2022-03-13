import JobsList from '../components/Jobs/JobsList';
import Map from '../components/Jobs/Map';
import SearchBar from '../components/Jobs/SearchBar';
import { useQuery } from 'react-query';
import { JobAPI } from '../api';
import useQueryParams from '../hooks/useQueryParams';

const Jobs = () => {
  const [searchParams] = useQueryParams();
  const { data: jobs, isLoading } = useQuery(
    ['jobs', { search: searchParams }],
    () =>
      JobAPI.getJobs({
        search: searchParams.q,
        status: 'active,cancelled,assigned',
      })
  );

  return (
    <>
      <SearchBar />

      <main className="grid flex-1 grid-cols-2">
        <div className="flex items-center justify-center bg-gray-100 text-4xl text-gray-400 shadow-inner">
          <Map jobs={jobs} />
        </div>
        <JobsList jobs={jobs} isLoading={isLoading} />
      </main>
    </>
  );
};

export default Jobs;
