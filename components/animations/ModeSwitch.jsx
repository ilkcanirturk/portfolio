"use client";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";

const ModeSwitch = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === "dark" ? 0 : 360 }} 
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <motion.div
            animate={{
              rotate: [0, 360],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              rotate: {
                duration: 16,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <BsSunFill className="text-yellow-400 text-2xl hover:text-accent" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{
                rotate: [-5, 20, -5],
              }}
              transition={{
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut",
              }}
            >
              <BsFillMoonStarsFill className="text-white text-2xl hover:text-accent" />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </button>
  );
};

export default ModeSwitch;
