"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold, PiCaretLeftFill, PiCaretRightFill, PiCaretLeftDuotone, PiCaretRightDuotone } from "react-icons/pi";
import { TbChevronLeft, TbChevronLeftPipe, TbChevronRight, TbChevronRightPipe } from "react-icons/tb";
import { motion } from "framer-motion";

const SliderButtons = ({ containerStyles, btnStyles, iconsStyles, activeIndex, lastIndex }) => {
  const swiper = useSwiper();

  const bounceAnimationLeft = {
    initial: { x: 0 },
    animate: { x: [-5, 5, -5] },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };

  const bounceAnimationRight = {
    initial: { x: 0 },
    animate: { x: [5, -5, 5] },
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  };

  const getButtonStyles = (direction) => {
    const isFirstSlide = activeIndex === 0;
    const isLastSlide = activeIndex === lastIndex - 1;

    const baseStyles = btnStyles;
    let conditionalStyles = "bg-accent hover:bg-accent/70";

    if (direction === "prev") {
      if (isFirstSlide) {
        conditionalStyles = "bg-accent/50 opacity-30 cursor-not-allowed";
      }
    } else if (direction === "next") {
      if (isLastSlide) {
        conditionalStyles = "bg-accent/50 opacity-30 cursor-not-allowed";
      }
    }

    return `${baseStyles} ${conditionalStyles} transition-all duration-300`;
  };

  return (
    <div className={containerStyles}>
      <button 
        className={getButtonStyles("prev")}
        onClick={() => swiper.slidePrev()} 
        disabled={activeIndex === 0}
      >
        {activeIndex === 0 ? (
          <TbChevronLeftPipe className={iconsStyles} />
        ) : (
          <motion.div {...bounceAnimationLeft}>
            <TbChevronLeft className={iconsStyles} />
          </motion.div>
        )}
      </button>
      <button 
        className={getButtonStyles("next")}
        onClick={() => swiper.slideNext()}
        disabled={activeIndex === lastIndex - 1}
      >
        {activeIndex === lastIndex - 1 ? (
          <TbChevronRightPipe className={iconsStyles} />
        ) : (
          <motion.div {...bounceAnimationRight}>
            <TbChevronRight className={iconsStyles} />
          </motion.div>
        )}
      </button>
    </div>
  );
};

export default SliderButtons;
