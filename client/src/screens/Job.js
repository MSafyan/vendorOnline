import ImageViewer from '../components/Job/ImageViewer';
import JobDetails from '../components/Job/JobDetails';
import jobs from '../components/Jobs/jobs';
import useActivePage from '../hooks/useActivePage';

const Job = () => {
  const { subPage } = useActivePage();
  console.log(subPage);

  const job = jobs.find((job) => job.id === parseInt(subPage));

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-12 gap-4 py-10">
      <div className="col-span-8">
        <ImageViewer images={[...new Array(12)].map((_, i) => i + 1)} />
      </div>

      <div className="col-span-4">
        <JobDetails job={job} />
      </div>
    </main>
  );
};

export default Job;
