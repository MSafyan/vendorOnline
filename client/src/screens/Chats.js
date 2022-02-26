import { useEffect, useState } from 'react';
import ChatSidebar from '../components/Chats/ChatSidebar';
import ChatWindow from '../components/Chats/ChatWindow';
import chatsData from '../components/Chats/chats';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';

const Chats = () => {
  const [chats, setChats] = useState(chatsData);
  const [activeChat, setActiveChat] = useState(null);

  const sendMessage = (chatId, message) => {
    const chat = chats.find((c) => c.id === chatId);
    const newMessage = {
      id: chat.messages.length + 1,
      text: message,
      createdAt: dayjs().toDate(),
      sender: {
        id: 2,
        name: 'Jane Doe',
      },
    };

    chat.messages.push(newMessage);
    setChats([...chats]);
  };

  const search = new URLSearchParams(useLocation().search);

  useEffect(() => {
    if (search.get('cu')) {
      const chat = chats.find((chat) =>
        chat.users.some((user) => user.id === parseInt(search.get('cu')))
      );

      if (chat) {
        setActiveChat(chat.id);
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
          />
        </div>
        <div className="col-span-9">
          <ChatWindow
            chat={
              activeChat ? chats.find((chat) => chat.id === activeChat) : null
            }
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </main>
  );
};

export default Chats;
