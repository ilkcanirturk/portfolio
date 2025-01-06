import { motion } from "framer-motion";

const StaircaseAnimation = () => {
  const heights = [10, 20, 30, 40];

  return (
    <div className="flex justify-center items-end h-14 w-full gap-2 p-4">
      {heights.map((_, i) => (
        <motion.div
          key={i}
          className="w-2 bg-accent rounded shadow-md"
          initial={{ height: `${heights[i]}px` }}
          animate={{
            height: heights.map(
              (_, j) => `${heights[(i + j) % heights.length]}px`
            ),
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror", // Tersine dönerek kesintisiz hareket
            duration: 4, // Daha uzun süre için
            ease: "easeInOut", // Daha pürüzsüz geçişler
          }}
        ></motion.div>
      ))}
    </div>
  );
};
export default StaircaseAnimation;
