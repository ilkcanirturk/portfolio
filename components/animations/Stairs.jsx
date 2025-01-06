"use client";

import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
    borderTop: "10px solid #00ff99",
  },
  animate: {
    top: "100%",
    borderTop: "500px solid #F6F193",
  },
  exit: {
    top: ["100%", "0%"],
    borderTop: "10px solid #EE4E4E",
  },
};

const reverseIndex = (index) => {
  const totalSteps = 10;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.05,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;