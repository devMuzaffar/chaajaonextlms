import { MdPerson } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="bg-primary h-16 px-6 py-3">
      {/* Profile With Name */}
      <div className="flex items-center w-fit gap-3 text-white cursor-pointer">
        <div className="bg-zinc-400 text-zinc-300 text-3xl rounded-full p-1">
          <MdPerson />
        </div>
        <p className="text-lg font-semibold">Operator</p>
      </div>
    </div>
  );
};

export default TopHeader;
