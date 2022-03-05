import SidebarButton from './SidebarButton';
import SidebarButtonSkeleton from './SidebarButtonSkeleton';
import useLoggedIn from '../../hooks/useLoggedIn';

const ChatSidebar = ({ chats, activeChat, setActiveChat, isLoading }) => {
  const { user } = useLoggedIn();

  return (
    <aside className="h-full bg-gray-100">
      <div className="mb-2 flex h-12 w-full items-center bg-primary-500 py-2 px-4 text-lg font-bold text-white">
        Chats
      </div>

      <div className="thin-scrollbar-y h-[60vh] overflow-y-auto">
        {isLoading
          ? [...new Array(5)].map((_, i) => <SidebarButtonSkeleton key={i} />)
          : chats?.map((chat) => (
              <SidebarButton
                setActive={() => setActiveChat(chat._id)}
                other={chat.users.find((u) => u._id !== user?._id)}
                lastMessage={chat.messages?.[chat.messages?.length - 1] || {}}
                key={chat._id}
                active={activeChat === chat._id}
              />
            ))}
      </div>
    </aside>
  );
};

export default ChatSidebar;
