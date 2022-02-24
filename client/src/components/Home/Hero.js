const Hero = () => {
  return (
    <section className="grid min-h-[75vh] grid-cols-12 gap-8 bg-gradient-to-r from-primary-500/10 to-primary-500/0 px-8 py-12 md:px-12 lg:px-20">
      <div className="col-span-6 flex flex-col justify-center gap-4">
        <p className="text-left text-3xl font-medium">
          When life gets busy, you don't have to tackle it alone. Workers and
          contractors come to you
        </p>
        <div className="space-x-8">
          <button className="rounded-lg bg-primary-500 py-1 px-4 font-semibold text-white transition hover:bg-primary-600">
            Post a Job
          </button>
          <button className="rounded-lg bg-primary-500 py-1 px-4 font-semibold text-white transition hover:bg-primary-600">
            Find a Job
          </button>
        </div>
      </div>
      <div className="col-span-6">
        <div className="h-full w-full bg-slate-300"></div>
      </div>
    </section>
  );
};

export default Hero;
