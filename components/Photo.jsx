"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex items-center justify-center"
      >
        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] before:absolute before:inset-0 before:bg-black/10 hover:before:bg-black/25 before:rounded-full before:z-10"
        >
          <Image
            src="/assets/pp.webp"
            priority
            quality={100}
            fill
            alt="Descriptive Alt Text"
            sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
            className="object-cover rounded-full absolute inset-0 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Animated Circle */}
        <motion.svg
          className="absolute w-[340px] h-[340px] xl:w-[540px] xl:h-[540px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="254"
            cy="254"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{
              strokeDasharray: "20 40 60 80",
              stroke: "#00ff99",
              scale: 1,
              opacity: 0.5,
            }}
            animate={{
              strokeDasharray: [
                "20 40 60 80",
                "80 20 40 60",
                "60 100 30 10",
                "40 20 80 60",
                "20 40 60 80",
              ],
              rotate: [0, 360],
              stroke: ["#00ff99", "#66ffc2", "#009966", "#b3ffd9", "#00ff99"],
              scale: [0.98, 1, 0.96, 1, 0.98],
              strokeWidth: [2, 3, 5, 3, 2],
              opacity: [ 0.5, 1, 0.5]
            }}
            transition={{
              strokeDasharray: {
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              },
              stroke: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              strokeWidth: {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror"
              },
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;