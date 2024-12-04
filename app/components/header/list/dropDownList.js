import { MdOutlinePhoneAndroid, MdOutlineWhatsapp } from "react-icons/md";
import { CgProfile, CgLogOut  } from "react-icons/cg";


export const counselorList = [
  { icon: <MdOutlinePhoneAndroid size={22} />, text: "Call to counselor" },
  { icon: <MdOutlineWhatsapp size={22} />, text: "Whatsapp" },
];

export const profileList = [
  { icon: <CgProfile size={22} />, text: "My Profile" },
  { icon: <CgLogOut size={22} />, text: "Logout" },
];
