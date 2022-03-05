const TextSkeleton = ({ size = 'md' }) => {
  let sizeClasses = '';

  if (size === 'sm') {
    sizeClasses = 'h-2';
  } else if (size === 'md') {
    sizeClasses = 'h-2';
  } else if (size === 'lg') {
    sizeClasses = 'h-4';
  }

  return (
    <div className="animate-pulse py-1">
      <div class={`${sizeClasses} rounded bg-slate-200`}></div>
    </div>
  );
};

export default TextSkeleton;
