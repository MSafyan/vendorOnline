import JobsList from '../components/Jobs/JobsList';
import SearchBar from '../components/Jobs/SearchBar';

const Jobs = () => {
  return (
    <>
      <SearchBar />

      <main className="grid flex-1 grid-cols-2">
        <div className="flex items-center justify-center bg-gray-100 text-4xl text-gray-400 shadow-inner">
          Map
        </div>
        <JobsList />
      </main>
    </>
  );
};

export default Jobs;
