import firstCharacter from '../../utils/firstCharacter';
import dayjs from 'dayjs';

const SidebarButton = ({ setActive, other, lastMessage, active }) => {
  return (
    <button
      className={`flex w-full items-center gap-2 py-2 px-3 text-left transition ${
        active ? 'bg-primary-500/10 ' : ''
      }`}
      onClick={setActive}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 text-sm font-bold text-gray-600">
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
      <div className="flex flex-1 flex-col justify-center">
        <h3 className="text-sm">{other.name}</h3>
        <div className="flex items-baseline">
          <p className="flex-1 truncate text-xs text-gray-600">
            {lastMessage.text}
          </p>
          <span className="text-xxs text-gray-500 ">
            {dayjs(lastMessage.createdAt).diff(dayjs(), 'days') < 1
              ? dayjs(lastMessage.createdAt).format('hh:mm A')
              : dayjs(lastMessage.createdAt).fromNow()}
          </span>
        </div>
      </div>
    </button>
  );
};

export default SidebarButton;
