import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="grid min-h-[75vh] grid-cols-6 gap-8 bg-gradient-to-r from-primary-500/10 to-primary-500/0 px-2 py-12 sm:px-8 md:grid-cols-12 md:px-12 lg:px-20">
      <div className="col-span-6 flex flex-col justify-center gap-8 py-10 px-4 text-center sm:p-20 md:gap-4 md:p-0 md:text-left">
        <p className="text-2xl font-medium md:text-3xl">
          When life gets busy, you don't have to tackle it alone. Workers and
          contractors come to you
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:justify-start">
          <button
            className="rounded-lg bg-primary-500 py-1 px-4 text-sm font-semibold text-white transition hover:bg-primary-600 md:text-base"
            onClick={() => navigate('/post-job')}
          >
            Post a Job
          </button>
          <button
            className="rounded-lg bg-primary-500 py-1 px-4 text-sm font-semibold text-white transition hover:bg-primary-600 md:text-base"
            onClick={() => navigate('/jobs')}
          >
            Find a Job
          </button>
        </div>
      </div>
      <div className="col-span-6">
        <div className="h-full min-h-[14rem] w-full bg-slate-300 sm:min-h-[20rem]"></div>
      </div>
    </section>
  );
};

export default Hero;
