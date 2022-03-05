import { useState, useEffect } from 'react';
import AssignJob from './AssignJob';

const ChatInput = ({ chatId, sendMessage, other }) => {
  const [message, setMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (message.trim()) {
      sendMessage(chatId, message);
      setMessage('');
    }
  };

  useEffect(() => {
    setMessage('');
  }, [chatId]);

  return (
    <form className="relative my-2 px-10" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        className=" w-full rounded-lg border-2 border-gray-200 py-2 pl-4 pr-28 focus:border-primary-300 focus:ring-0"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="absolute right-0 top-1/2 mr-12 flex -translate-y-1/2 items-center gap-3">
        <AssignJob assignTo={other} chatId={chatId} />

        <button
          type="submit"
          className="rounded-lg bg-primary-500 py-1 px-3 font-medium text-white"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
