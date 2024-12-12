import { MdOutlineCheckCircle } from "react-icons/md";
import { MdOutlineAccessTime  } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdDoNotDisturb } from "react-icons/md";





// Ring with Color prop
const Icon = ({ color, text, icon }) => (
  <div className="flex items-center gap-2">
    <div className={`text-base ${color}`}>{icon}</div>
    <p className="text-slate-500">{text}</p>
  </div>
);

// A list of Status Icons with Text
const statusIcons = [
  <Icon
    color={"text-green-700"}
    icon={<MdOutlineCheckCircle />}
    text={"Online"}
  />,
  <Icon
    color={"text-yellow-400"}
    icon={<MdOutlineAccessTime />}
    text={"Away"}
  />,
  <Icon
    color={"text-red-500"}
    icon={<MdRemoveCircleOutline />}
    text={"Do not disturb"}
  />,
  <Icon
    color={"text-gray-500"}
    icon={<MdDoNotDisturb />}
    text={"Offline"}
  />,
];

export default statusIcons;
