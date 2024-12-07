import { MdNavigateBefore } from "react-icons/md";

export default function SlidePrevButton({ className, ref, onClick }) {
  const handleNext = () => {
    onClick();
  };

  return (
    <button
      className={`swiper-prev rounded-full w-max p-1 absolute top-1/2 text-white border-[1px] border-zinc-500 bg-zinc-500 z-10 -ml-4 -mt-4 ${className}`}
      onClick={handleNext}
    >
      <MdNavigateBefore size={28} />
    </button>
  );
}
