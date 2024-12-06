import { motion, AnimatePresence } from "framer-motion";

const DropdownMenu = ({ list, isOpen, className }) => {
  const motionInitial = { opacity: 0, scale: 0, originY: 0 };
  const motionEnd = { opacity: 1, scale: 1, originY: 0 };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={motionInitial}
          animate={motionEnd}
          exit={motionInitial}
          transition={{ duration: 0.1 }}
          className={`absolute transition-all bg-white my-1 py-2 rounded-xl shadow-lg shadow-gray-400 ${className}`}
        >
          {/* Item */}
          {list.map((item, index) => (
            <div
              key={index}
              className="transition-all cursor-pointer flex py-2 px-5 gap-3 items-center hover:bg-gray-100"
            >
              {item.icon}
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
