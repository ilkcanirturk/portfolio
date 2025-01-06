import { motion } from "framer-motion";

const AboutAnimation = () => {
  const widthsTtop = [2, 10, 30];
  const widthsMiddle = [10, 5, 30];
  const widthsBottom = [2, 15, 30];

  return (
    <div className="flex flex-col space-y-3 h-14 w-14"> {/* Reduced vertical spacing */}
      <span className="flex justify-center items-center w-full gap-2"> {/* Reduced padding and gap */}
        {widthsTtop.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 bg-accent rounded shadow-md"
            initial={{ width: `${widthsTtop[i]}px` }}
            animate={{
              width: widthsTtop.map(
                (_, j) => `${widthsTtop[(i + j) % widthsTtop.length]}px`
              ),
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </span>
      <span className="flex justify-center items-center w-full gap-2">
        {widthsMiddle.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 bg-accent rounded shadow-md"
            initial={{ width: `${widthsMiddle[i]}px` }}
            animate={{
              width: widthsMiddle.map(
                (_, j) => `${widthsMiddle[(i + j) % widthsMiddle.length]}px`
              ),
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </span>
      <span className="flex justify-center items-center w-full gap-2">
        {widthsBottom.map((_, i) => (
          <motion.div
            key={i}
            className="h-1 bg-accent rounded shadow-md"
            initial={{ width: `${widthsBottom[i]}px` }}
            animate={{
              width: widthsBottom.map(
                (_, j) => `${widthsBottom[(i + j) % widthsBottom.length]}px`
              ),
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </span>
    </div>
  );
};

export default AboutAnimation;