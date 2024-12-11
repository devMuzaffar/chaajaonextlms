import TopHeader from "./components/TopHeader";
import ChatBody from "./components/ChatBody";

const Chat = () => {
  return (
    <div className="bg-header p-4 md:p-6">
      
      {/* Chat Window */}
      <div className="h-[calc(100vh-18vh)] rounded-xl overflow-hidden w-full bg-white flex flex-col">

        {/* Top Header */}
        <TopHeader />

        {/* Conversation Body */}
        <ChatBody />

      </div>
    </div>
  );
};

export default Chat;
