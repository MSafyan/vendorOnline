import Rating from '../Utils/Rating';
import currencyFormatter from '../../utils/currencyFormatter';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import firstCharacter from '../../utils/firstCharacter';

const JobDetails = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full rounded bg-gray-100 px-6 py-10">
      {/* info section */}
      <div className="border-b-2 border-gray-600 pb-6 ">
        <h1 className="text-lg font-medium">{job.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <span>{currencyFormatter(job.price)}</span>
          <div className="flex items-center gap-0.5 text-sm">
            Reviews <Rating reviews={job.reviews} showLength />
          </div>
        </div>

        <p className="mt-2 text-sm text-gray-700">
          Posted {dayjs(job.createdAt).fromNow()} in {job.location}
        </p>

        <p className="mt-2 text-sm text-gray-700">{job.description}</p>

        <h5 className="mt-3 text-xs text-gray-600">{job.company}</h5>

        <button
          className="mt-6 w-full rounded-md bg-primary-500 py-1.5 px-8 font-semibold text-white transition hover:bg-primary-600"
          onClick={() => navigate(`/chats?cu=${job.poster.id}`)}
        >
          Message
        </button>
      </div>

      {/* profile section */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-bold text-gray-600">
          {job.poster?.profilePic ? (
            <img
              src={job.poster.profilePic}
              alt="profile"
              className="h-full w-full object-cover"
            />
          ) : (
            firstCharacter(job.poster.name)
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="">{job.poster.name}</h3>
          <p className="text-sm text-gray-600">
            Member since {dayjs(job.poster.createdAt).format('MMM YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
