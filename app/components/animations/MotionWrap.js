import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MotionWrap = ({ children }) => {
  const pathname = usePathname();
  const initial = { opacity: 0, y: 50 };
  const end = { opacity: 1, y: 0 };
  const transition = { duration: 0.2, ease: "easeOut" };

  return (
    <motion.div
      className="w-full h-4/5"
      key={pathname}
      initial={initial}
      animate={end}
      exit={initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrap;
