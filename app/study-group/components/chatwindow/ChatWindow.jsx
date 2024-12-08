import BodyIntro from "../bodyintro/BodyIntro";
import ChatHeader from "../chatheader/ChatHeader";

const ChatWindow = () => {
  return (
    <div className="h-[calc(100vh-18vh)] border-2 rounded-xl overflow-hidden w-full bg-white flex">
      {/* Profile People Section */}
      <div className="flex-[2]">
        {/* Profile Header */}
        <ChatHeader />

        {/* People List */}
        <div className=""></div>
      </div>

      {/* Chat Body Section */}
      <div className="bg-chat relative flex-[4] flex items-center justify-center">
        <div className="bg-chat-shade absolute inset-0 w-full h-full" />

        {/* Rounded Chat App with Text */}
        <BodyIntro />
      </div>
    </div>
  );
};

export default ChatWindow;
