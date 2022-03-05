import { useRef, useEffect, useState } from 'react';
import Message from './Message';
import MessageSkeleton from './MessageSkeleton';
import useLoggedIn from '../../hooks/useLoggedIn';
import { useQuery } from 'react-query';
import { ChatAPI } from '../../api';

const Messages = ({ chatId }) => {
  const { user } = useLoggedIn();

  const { data: chat, isLoading } = useQuery(['chat', chatId], () =>
    ChatAPI.getChat(chatId)
  );

  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [chat?.messages, messagesEndRef.current]);

  return (
    <div className="thin-scrollbar-y mt-2 h-[60vh] overflow-auto py-6 px-10">
      <div className="flex flex-col justify-end">
        {isLoading
          ? [...new Array(10)].map((_, i) => (
              <MessageSkeleton
                key={i}
                self={i % 2 === Math.floor(Math.random() * 2)}
              />
            ))
          : chat.messages?.map((message, index) => (
              <Message
                message={message}
                key={index}
                self={message.sender._id === user._id}
                ref={index === chat.messages.length - 1 ? messagesEndRef : null}
              />
            ))}
      </div>
    </div>
  );
};

export default Messages;
