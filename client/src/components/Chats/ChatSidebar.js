import SidebarButton from './SidebarButton';
import useLoggedIn from '../../hooks/useLoggedIn';

const ChatSidebar = ({ chats, activeChat, setActiveChat }) => {
  const { user } = useLoggedIn();

  return (
    <aside className="h-full bg-gray-100">
      <div className="mb-2 flex h-12 w-full items-center bg-primary-500 py-2 px-4 text-lg font-bold text-white">
        Chats
      </div>

      <div className="thin-scrollbar-y h-[60vh] overflow-y-auto">
        {chats.map((chat) => (
          <SidebarButton
            setActive={() => setActiveChat(chat.id)}
            other={chat.users.find((u) => u.id !== user.id)}
            lastMessage={chat.messages[chat.messages.length - 1]}
            key={chat.id}
            active={activeChat === chat.id}
          />
        ))}
      </div>
    </aside>
  );
};

export default ChatSidebar;
