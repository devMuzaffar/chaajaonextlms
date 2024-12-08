import { MdDone } from "react-icons/md";

const GreenTick = () => {
  return (
    <div className="absolute right-0 bottom-0 text-green-600 rounded-full border-2 border-green-600 bg-white">
      <MdDone size={10} />
    </div>
  );
};

export default GreenTick;
