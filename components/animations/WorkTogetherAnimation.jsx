import React from "react";
import { motion } from "framer-motion";

const WorkTogetherAnimation = () => {
  const createGearPath = (teeth) => {
    const radius = 10;
    const innerRadius = 7;
    const toothHeight = 2.4;
    const toothWidth = ((2 * Math.PI * radius) / teeth) * 0.44;

    let path = "";
    for (let i = 0; i < teeth; i++) {
      const angle = (i * 2 * Math.PI) / teeth;
      const toothStartAngle = angle - toothWidth / (2 * radius);
      const toothEndAngle = angle + toothWidth / (2 * radius);

      const toothStartX = Math.cos(toothStartAngle) * radius;
      const toothStartY = Math.sin(toothStartAngle) * radius;
      const toothOuterStartX =
        Math.cos(toothStartAngle) * (radius + toothHeight);
      const toothOuterStartY =
        Math.sin(toothStartAngle) * (radius + toothHeight);
      const toothOuterEndX = Math.cos(toothEndAngle) * (radius + toothHeight);
      const toothOuterEndY = Math.sin(toothEndAngle) * (radius + toothHeight);
      const toothEndX = Math.cos(toothEndAngle) * radius;
      const toothEndY = Math.sin(toothEndAngle) * radius;

      if (i === 0) {
        path += `M ${toothStartX},${toothStartY}`;
      }

      path += ` L ${toothOuterStartX},${toothOuterStartY}`;
      path += ` L ${toothOuterEndX},${toothOuterEndY}`;
      path += ` L ${toothEndX},${toothEndY}`;

      const nextToothStartAngle =
        ((i + 1) * 2 * Math.PI) / teeth - toothWidth / (2 * radius);
      path += ` A ${radius},${radius} 0 0 1 ${
        Math.cos(nextToothStartAngle) * radius
      },${Math.sin(nextToothStartAngle) * radius}`;
    }

    path += ` Z M 0,0 m -${innerRadius},0 a ${innerRadius},${innerRadius} 0 1,0 ${
      innerRadius * 2
    },0 a ${innerRadius},${innerRadius} 0 1,0 -${innerRadius * 2},0`;

    return path;
  };

  return (
    <div className="relative w-[300px] h-[150px]">
      <motion.svg
        width="50"
        height="50"
        viewBox="-15 -15 30 30"
        className="absolute text-[#A8D5BA] left-[90px] top-[105px] z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
      >
        <path d={createGearPath(8)} fill="currentColor" />
      </motion.svg>

      <motion.svg
        width="110"
        height="110"
        viewBox="-15 -15 30 30"
        className="absolute text-accent left-[96px] top-[42px] z-50"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <path d={createGearPath(12)} fill="currentColor" />
      </motion.svg>

      <motion.svg
        width="65"
        height="65"
        viewBox="-15 -15 30 30"
        className="absolute left-[118.5px] top-[64.5px] z-40"
        animate={{
          rotate: 360,
          fill: ["#4CAF93", "#A8D5BA", "#E0F7E9", "#4CAF93"],
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          fill: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ fill: "#4CAF93" }}
      >
        <path d={createGearPath(36)} />
      </motion.svg>

      <motion.svg
        width="38"
        height="38"
        viewBox="-15 -15 30 30"
        className="absolute left-[132px] top-[78.25px] z-30"
        animate={{
          rotate: -360,
          fill: ["#A8D5BA", "#E0F7E9", "#4CAF93", "#A8D5BA"],
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          fill: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        style={{ fill: "#A8D5BA" }}
      >
        <path d={createGearPath(12)} />
      </motion.svg>

      <motion.svg
        width="70"
        height="70"
        viewBox="-15 -15 30 30"
        className="absolute text-white left-[185px] top-[51px] z-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <path d={createGearPath(8)} fill="currentColor" />
      </motion.svg>

      <motion.svg
        width="40"
        height="40"
        viewBox="-15 -15 30 30"
        className="absolute text-gray-300 left-[200px] top-[66px] z-40"
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        <path d={createGearPath(24)} fill="currentColor" />
      </motion.svg>

      <motion.svg
        width="25"
        height="25"
        viewBox="-15 -15 30 30"
        className="absolute text-[#4CAF93] left-[207.5px] top-[73.5px] z-10"
        animate={{
          rotate: 360,
          fill: ["#A8D5BA", "#4CAF93", "#A8D5BA"],
        }}
        transition={{
          rotate: { duration: 1, repeat: Infinity, ease: "linear" },
          fill: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <path d={createGearPath(6)} />
      </motion.svg>

      <motion.svg
        width="40"
        height="40"
        viewBox="-15 -15 30 30"
        className="absolute text-gray-500 left-[234px] top-[80px] z-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      >
        <path d={createGearPath(8)} fill="currentColor" />
      </motion.svg>

      <motion.svg
        width="35"
        height="35"
        viewBox="-15 -15 30 30"
        className="absolute text-[#4CAF93] left-[95px] top-[56px] z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      >
        <path d={createGearPath(8)} fill="currentColor" />
      </motion.svg>
    </div>
  );
};

export default WorkTogetherAnimation;
