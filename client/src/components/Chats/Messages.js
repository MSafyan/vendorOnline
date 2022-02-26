import { useRef, useEffect } from 'react';
import Message from './Message';

const Messages = ({ messages, user }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }, [messages, messagesEndRef.current]);

  return (
    <div className="thin-scrollbar-y mt-2 h-[60vh] overflow-auto py-6 px-10">
      <div className="flex flex-col justify-end">
        {messages.map((message, index) => (
          <Message
            message={message}
            key={index}
            self={message.sender.id === user.id}
            ref={index === messages.length - 1 ? messagesEndRef : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
