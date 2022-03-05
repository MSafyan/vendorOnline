import { forwardRef } from 'react';
import dayjs from 'dayjs';
import { BriefcaseIcon } from '@heroicons/react/outline';
import Rating from '../Utils/Rating';

const ReferenceMessage = forwardRef(({ message, self }, ref) => {
  return (
    <div
      ref={ref}
      className={`my-1 flex w-full ${self ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex flex-col ${self ? 'items-end' : 'items-start'}`}>
        <div className="flex items-center justify-center gap-5 rounded-lg bg-blue-400/30 py-4 px-8 text-blue-800/80">
          <div className="">
            <BriefcaseIcon className="h-12 w-12" />
          </div>
          <div
            className={`flex flex-col ${
              self ? 'justify-end' : 'justify-start'
            }`}
          >
            <p className="text-sm">{message.text}</p>
            {self && message.job.status === 'assigned' && (
              <div className="mt-2 flex justify-end gap-2">
                <button className="rounded-lg border border-blue-500 py-0.5 px-4 text-sm font-semibold text-blue-500 transition hover:border-blue-600 hover:text-blue-600">
                  Cancel
                </button>
                <button className="rounded-lg bg-blue-500 py-0.5 px-4 text-sm font-semibold text-white transition hover:bg-blue-600">
                  Complete
                </button>
              </div>
            )}
            {message.job.status === 'completed' && <Rating reviews={[]} />}
            <button></button>
          </div>
        </div>
        <span className="mt-1 text-xxs text-gray-700">
          {dayjs(message.createdAt).format('h:mm a')}
        </span>
      </div>
    </div>
  );
});

export default ReferenceMessage;
