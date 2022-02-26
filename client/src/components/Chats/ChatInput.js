import { useState, useEffect } from 'react';

const ChatInput = ({ chatId, sendMessage }) => {
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
        className=" w-full rounded-lg border-2 border-gray-200 py-2 px-4 focus:border-primary-300 focus:ring-0"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-1/2 mr-12 -translate-y-1/2 rounded-lg bg-primary-500 py-1 px-3 font-medium text-white"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
