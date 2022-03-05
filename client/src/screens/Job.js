import ImageViewer from '../components/Job/ImageViewer';
import ImageViewerSkeleton from '../components/Job/ImageViewerSkeleton';
import JobDetails from '../components/Job/JobDetails';
import JobDetailsSkeleton from '../components/Job/JobDetailsSkeleton';
import useActivePage from '../hooks/useActivePage';
import { useQuery } from 'react-query';
import { JobAPI } from '../api';

const Job = () => {
  const { subPage } = useActivePage();

  const { data: job, isLoading } = useQuery(['job', subPage], () =>
    JobAPI.getJob(subPage)
  );

  console.log(job);

  // const job = jobs.find((job) => job.id === parseInt(subPage));

  return (
    <main className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-12 gap-4 py-10">
      <div className="col-span-8">
        {isLoading ? (
          <ImageViewerSkeleton />
        ) : (
          <ImageViewer images={job.images || []} />
        )}
      </div>

      <div className="col-span-4">
        {isLoading ? <JobDetailsSkeleton /> : <JobDetails job={job} />}
      </div>
    </main>
  );
};

export default Job;
