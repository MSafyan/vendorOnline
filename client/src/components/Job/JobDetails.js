import Rating from '../Utils/Rating';
import currencyFormatter from '../../utils/currencyFormatter';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import firstCharacter from '../../utils/firstCharacter';
import useLoggedIn from '../../hooks/useLoggedIn';

const JobDetails = ({ job }) => {
  const { isLoggedIn, user } = useLoggedIn();
  const navigate = useNavigate();

  return (
    <div className="w-full rounded bg-gray-100 px-6 py-10">
      {/* info section */}
      <div className="border-b-2 border-gray-600 pb-6 ">
        <h1 className="text-lg font-medium">{job.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <span className="font-medium">{currencyFormatter(job.budget)}</span>
          <div className="flex items-center gap-0.5 text-sm">
            Reviews <Rating reviews={job.reviews || []} showLength />
          </div>
        </div>

        <p className="mt-3 text-sm text-gray-700">
          Posted {dayjs(job.createdAt).fromNow()} in{' '}
          <span className="text-gray-800">{job.location}</span>
        </p>

        <p className="mt-3 text-sm leading-4 text-gray-700">
          {job.description}
        </p>

        <h5 className="mt-4 text-xs text-gray-600">{job.company}</h5>

        {isLoggedIn && user?._id === job.createdBy._id ? null : (
          <button
            className="mt-6 w-full rounded-md bg-primary-500 py-1.5 px-8 font-semibold text-white transition hover:bg-primary-600 disabled:opacity-50 disabled:hover:bg-primary-500"
            onClick={() => navigate(`/chats?cu=${job.createdBy._id}`)}
            disabled={!isLoggedIn}
            title={!isLoggedIn ? 'You must be logged in to chat' : ''}
          >
            Message
          </button>
        )}
      </div>

      {/* profile section */}
      <div className="mt-6 flex items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 text-lg font-bold text-gray-600">
          {job.createdBy?.profileImage ? (
            <img
              src={job.createdBy.profileImage}
              alt="profile"
              className="h-full w-full object-cover"
            />
          ) : (
            firstCharacter(job.createdBy.name)
          )}
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="">{job.createdBy.name}</h3>
          <p className="text-sm text-gray-600">
            Member since {dayjs(job.createdBy.createdAt).format('MMM YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
