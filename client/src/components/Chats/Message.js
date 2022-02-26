import { forwardRef } from 'react';
import dayjs from 'dayjs';

const Message = forwardRef(({ message, self }, ref) => {
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
