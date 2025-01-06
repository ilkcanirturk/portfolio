import { motion } from "framer-motion";

const ExperienceAnimation = () => {
  return (
    <div className="flex justify-center items-center h-14 w-full space-x-1">
      {/* Sol Yıldız */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#00ff99"
        width="30"
        height="30"
        initial={{ scale: 0.7, opacity: 1 }}
        animate={{
          scale: [0.7, 0.9, 0.7],
          opacity: [1, 0.3, 1],
          rotate: [0, 360], // Sürekli dönme
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4, // Dönüş süresi (4 saniyede bir 360 derece döner)
            repeat: Infinity,
            ease: "linear", // Sabit hız
          },
        }}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </motion.svg>

      {/* Orta Yıldız */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#00ff99"
        width="46"
        height="46"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [1, 0.8, 1],
          opacity: [1, 0.5, 1],
          rotate: [0, -360], // Sürekli dönme
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4, // Dönüş süresi (4 saniyede bir 360 derece döner)
            repeat: Infinity,
            ease: "linear", // Sabit hız
          },
        }}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </motion.svg>

      {/* Sağ Yıldız */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#00ff99"
        width="30"
        height="30"
        initial={{ scale: 0.7, opacity: 1 }}
        animate={{
          scale: [0.7, 0.9, 0.7],
          opacity: [1, 0.3, 1],
          rotate: [0, 360], // Sürekli dönme
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 4, // Dönüş süresi (4 saniyede bir 360 derece döner)
            repeat: Infinity,
            ease: "linear", // Sabit hız
          },
        }}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </motion.svg>
    </div>
  );
};

export default ExperienceAnimation;




