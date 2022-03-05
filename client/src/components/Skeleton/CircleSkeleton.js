const CircleSkeleton = ({ size = 'md' }) => {
  let sizeClasses = '';

  if (size === 'sm') {
    sizeClasses = 'w-8 h-8';
  } else if (size === 'md') {
    sizeClasses = 'w-12 h-12';
  } else if (size === 'lg') {
    sizeClasses = 'w-16 h-16';
  }

  return (
    <div className="animate-pulse">
      <div class={`${sizeClasses} rounded-full bg-slate-200`}></div>
    </div>
  );
};

export default CircleSkeleton;
