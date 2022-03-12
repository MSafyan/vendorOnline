import ChatSidebar from '../components/Chats/ChatSidebar';
import ChatWindow from '../components/Chats/ChatWindow';

const Chats = () => {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col py-8">
      <div className="grid w-full flex-1 grid-cols-12 ">
        <div className="col-span-3">
          <ChatSidebar />
        </div>
        <div className="col-span-9">
          <ChatWindow />
        </div>
      </div>
    </main>
  );
};

export default Chats;
