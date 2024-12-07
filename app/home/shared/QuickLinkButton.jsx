import { FaArrowRight } from "react-icons/fa6";

const QuickLinkButton = ({
  icon,
  text,
  desc,
  className,
  textClass,
  descClass,
  iconClass,
}) => {
  return (
    <div
      className={`cursor-pointer bg-white rounded-lg shadow-sm shadow-gray-300 flex items-center justify-between px-4 py-3 w-full ${className}`}
    >
      {/* Icon & Text Block */}
      <div className="flex items-center gap-3">
        {/* Icon*/}
        <div className={`w-6 ${iconClass}`}>
          <img src={icon} alt="" />
        </div>

        {/* Text & Desc */}
        <div className="flex flex-col">
          <h3 className={`font-bold ${textClass}`}>{text}</h3>
          <p className={`text-slate-500 ${descClass}`}>{desc}</p>
        </div>
      </div>

      {/* Button */}
      <div className="cursor-pointer bg-primary rounded-full p-2">
        <FaArrowRight size={10} className="text-white" />
      </div>
    </div>
  );
};

export default QuickLinkButton;
