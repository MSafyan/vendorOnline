import { useEffect, useState } from 'react';
import ChatSidebar from '../components/Chats/ChatSidebar';
import ChatWindow from '../components/Chats/ChatWindow';
import chatsData from '../components/Chats/chats';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import useQueryParams from '../hooks/useQueryParams';
import { useQuery } from 'react-query';
import { ChatAPI } from '../api';

const Chats = () => {
  // const [chats, setChats] = useState(chatsData);
  const [activeChat, setActiveChat] = useState(null);
  const [search] = useQueryParams();

  const { data: chats, isLoading } = useQuery('chats', ChatAPI.getChats);

  useEffect(() => {
    if (search.cu) {
      const chat = chats?.find((chat) =>
        chat.users.some((user) => user._id === search.cu)
      );

      if (chat) {
        setActiveChat(chat._id);
      }
    }
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8">
      <div className="grid w-full flex-1 grid-cols-12 ">
        <div className="col-span-3">
          <ChatSidebar
            chats={chats}
            activeChat={activeChat}
            setActiveChat={setActiveChat}
            isLoading={isLoading}
          />
        </div>
        <div className="col-span-9">
          <ChatWindow
            chat={
              activeChat ? chats?.find((chat) => chat._id === activeChat) : null
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Chats;
