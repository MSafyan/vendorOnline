import RectangleSkeleton from '../Skeleton/RectangleSkeleton';
import TextSkeleton from '../Skeleton/TextSkeleton';

const SkeletonCard = () => {
  return (
    <div className="w-full border border-b-4 border-gray-100 border-b-primary-500 shadow">
      {/* image section */}
      <div className="relative py-24">
        <RectangleSkeleton className="absolute inset-0" />
      </div>

      {/* info section */}
      <div className="px-6 py-3">
        <div className="w-1/3">
          <TextSkeleton size="lg" />
        </div>
        <div className="w-2/3">
          <TextSkeleton size="md" />
        </div>
        <div className="w-1/6">
          <TextSkeleton size="sm" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
