import { motion } from "framer-motion";

const ReactIconAnimated = () => {
  const transition = {
    duration: 4,
    repeat: Infinity, 
    ease: "linear", 
  };

  return (
    <div className="relative flex items-center justify-center h-14 w-14"> 
      {/* Ortadaki Nokta */}
      <span className="absolute w-2 h-2 bg-accent rounded-full z-10"></span> 

      {/* Dönen Elips1 */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "center",
        }}
        animate={{
          rotate: [0, -360], 
        }}
        transition={transition}
      >
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="90"  
            ry="30" 
            fill="none"
            stroke="#00ff99"
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      {/* Dönen Elips2 */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "center",
        }}
        animate={{
          rotate: [-120, -480], 
        }}
        transition={transition}
      >
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="90"  
            ry="30"   
            fill="none"
            stroke="#00ff99"
            strokeWidth="4"
          />
        </svg>
      </motion.div>

      {/* Dönen Elips3 */}
      <motion.div
        className="absolute"
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "center",
        }}
        animate={{
          rotate: [-240, -600], 
        }}
        transition={transition}
      >
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="100"
            cy="100"
            rx="90"  
            ry="30"   
            fill="none"
            stroke="#00ff99"
            strokeWidth="4"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ReactIconAnimated;
