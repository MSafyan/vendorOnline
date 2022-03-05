import firstCharacter from '../../utils/firstCharacter';
import useLoggedIn from '../../hooks/useLoggedIn';
import Messages from './Messages';
import ChatInput from './ChatInput';

const ChatWindow = ({ chat }) => {
  const { user } = useLoggedIn();
  const other = chat?.users.find((u) => u._id !== user._id);

  return (
    <div className="h-full bg-gray-50">
      {chat && (
        <>
          <div className="flex w-full items-center gap-4 bg-primary-400 p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-600">
              {other.profileImage ? (
                <img
                  src={other.profileImage}
                  alt="profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                firstCharacter(other.name)
              )}
            </div>

            <h3 className="text-lg font-bold text-gray-50">{other.name}</h3>
          </div>

          <Messages chatId={chat._id} />
          <ChatInput chatId={chat._id} />
        </>
      )}
    </div>
  );
};

export default ChatWindow;
