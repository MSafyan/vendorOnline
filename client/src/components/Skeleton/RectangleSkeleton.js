const RectangleSkeleton = ({ className }) => {
  return (
    <div className={`${className} animate-pulse`}>
      <div class="h-full w-full rounded bg-slate-200"></div>
    </div>
  );
};

export default RectangleSkeleton;
