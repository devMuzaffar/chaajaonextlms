import { MdOutlineChat } from "react-icons/md";

const BodyIntro = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-5 text-gray-800">

      {/* Chat App */}
      <div className="bg-white rounded-full w-52 h-52 flex items-center justify-center shadow-lg">
        <MdOutlineChat size={64} />
      </div>

      <p className="text-4xl font-bold">Chat App</p>

      <p>Select a contact to start a conversation!..</p>
    </div>
  );
};

export default BodyIntro;
