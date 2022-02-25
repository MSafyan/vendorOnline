import { useNavigate } from 'react-router-dom';

const Action = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 px-60">
      <h2 className="text-center text-3xl font-semibold ">
        Whenever you're posting or finding jobs,
        <br /> we can help you move forward.
      </h2>

      <div className="mt-12 flex justify-center gap-20">
        <div className="w-full max-w-md rounded-md border border-gray-300 bg-gray-100 py-8 px-12 text-center shadow-lg shadow-gray-300/30">
          <div className="h-48 w-full bg-slate-200"></div>
          <button
            className="mt-8 rounded-lg bg-primary-500 py-1.5 px-8 text-xl font-semibold text-white transition hover:bg-primary-600"
            onClick={() => navigate('/post-job')}
          >
            Post a Job
          </button>
        </div>
        <div className="w-full max-w-md rounded-md border border-gray-300 bg-gray-100 py-8 px-12 text-center shadow-lg shadow-gray-300/30">
          <div className="h-48 w-full bg-slate-200"></div>
          <button
            className="mt-8 rounded-lg bg-primary-500 py-1.5 px-8 text-xl font-semibold text-white transition hover:bg-primary-600"
            onClick={() => navigate('/jobs')}
          >
            Find a Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default Action;
