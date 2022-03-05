import { forwardRef } from 'react';
import dayjs from 'dayjs';
import { BriefcaseIcon } from '@heroicons/react/outline';

const Message = forwardRef(({ message, self }, ref) => {
  if (message.type === 'reference') {
    return (
      <div
        ref={ref}
        className={`my-1 flex w-full ${self ? 'justify-end' : 'justify-start'}`}
      >
        <div className={`flex flex-col ${self ? 'items-end' : 'items-start'}`}>
          <div className="flex items-center justify-center gap-5 rounded-lg bg-blue-400/30 py-4 px-8 text-blue-800/80">
            <div className="">
              <BriefcaseIcon className="h-10 w-10" />
            </div>
            <div
              className={`flex flex-col ${
                self ? 'justify-end' : 'justify-start'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
          <span className="mt-1 text-xxs text-gray-700">
            {dayjs(message.createdAt).format('h:mm a')}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex w-full ${self ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex flex-col ${self ? 'items-end' : 'items-start'}`}>
        <div
          className={`my-0.5 max-w-sm rounded-lg px-2 py-1 ${
            self
              ? 'rounded-tr-none bg-primary-500 font-medium text-white'
              : 'rounded-tl-none bg-gray-200'
          }`}
        >
          <p>{message.text}</p>
        </div>
        <span className="text-xxs text-gray-700">
          {dayjs(message.createdAt).format('h:mm a')}
        </span>
      </div>
    </div>
  );
});

export default Message;
