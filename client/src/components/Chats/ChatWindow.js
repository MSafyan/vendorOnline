import firstCharacter from '../../utils/firstCharacter';
import useLoggedIn from '../../hooks/useLoggedIn';
import Messages from './Messages';
import ChatInput from './ChatInput';

const ChatWindow = ({ chat, sendMessage }) => {
  const { user } = useLoggedIn();
  const other = chat?.users.find((u) => u.id !== user.id);

  return (
    <div className="h-full bg-gray-50">
      {chat && (
        <>
          <div className="flex w-full items-center gap-4 bg-primary-400 p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-600">
              {other.profilePic ? (
                <img
                  src={other.profilePic}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                firstCharacter(other.name)
              )}
            </div>

            <h3 className="text-lg font-bold text-gray-50">{other.name}</h3>
          </div>

          <Messages messages={chat.messages} user={user} />
          <ChatInput chatId={chat.id} sendMessage={sendMessage} />
        </>
      )}
    </div>
  );
};

export default ChatWindow;
