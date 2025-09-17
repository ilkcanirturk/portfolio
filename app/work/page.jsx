"use client";

import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";

import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";

const projects = [
  {
    num: "01",
    category: "web",
    title: "YosAcademy",
    description:
      "YosAcademy: A consulting platform for international students.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "i18n" },  
    ],
    image: "/assets/work/yosacademy.png",
    live: "https://www.yosacademy.info",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "02",
    category: "web",
    title: "Storish Product Catalog",
    description:
      "Storish Product Catalog: A modern, multilingual product catalog for the Storish brand.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Vercel" },
      
    ],
    image: "/assets/work/storishcatalog.png",
    live: "https://www.catalogstorish.com",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "03",
    category: "frontend",
    title: "Bellona EXPO",
    description:
      "Bellona International Trade Platform: A platform for managing international operations of the Bellona brand.",
    stack: [
      { name: "Next.js" },
      { name: "DevExtreme" },
      { name: "Tailwind" }
    ],
    image: "/assets/work/mdt-bellona-ss.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "04",
    category: "frontend",
    title: "İstikbal EXPO",
    description:
      "İstikbal Global Trade Platform: Designed to oversee and manage international operations for the İstikbal brand.",
      stack: [
        { name: "Next.js" },
        { name: "DevExtreme" },
        { name: "Tailwind" }
      ],
    image: "/assets/work/mdt-istikbal-ss.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "05",
    category: "frontend",
    title: "Mondihome EXPO",
    description:
      "Mondihome Global Operations Platform: A platform for efficiently managing international operations for the Mondihome brand.",
      stack: [
        { name: "Next.js" },
        { name: "DevExtreme" },
        { name: "Tailwind" }
      ],
    image: "/assets/work/mdt-mondi-ss.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "06",
    category: "mobile",
    title: "Link App",
    description:
      "Link App: An experimental chat application built with React Native.",
    stack: [
      { name: "React Native" },
      { name: "Firebase" },
      { name: "Redux Toolkit" },
      
    ],
    image: "/assets/work/linkapp-ss.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk/LinkApp",
  },
  {
    num: "07",
    category: "web",
    title: "Storish Portal",
    description:
      "Storish Portal: A business intelligence platform that centralizes the company's e-commerce operations and enables data-driven decision-making.",
    stack: [
      { name: "Next.js" },
      { name: "Supabase" },
      { name: "Shadcn" },
      
    ],
    image: "/assets/work/portalstorish.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "08",
    category: "frontend",
    title: "Storish CoPilot",
    description:
      "StorishCopilot: A platform designed to manage all logistics operations for the Storish brand.",
    stack: [
      { name: "React.js" },
      { name: "Redux Saga" },
      { name: "Css 3" },
    ],
    image: "/assets/work/storish.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk",
  },
  {
    num: "09",
    category: "frontend",
    title: "Gümüşsuyu ESA",
    description:
      "After-Sales Service module for E-Seller Assist Platform of Gümüşsuyu brand.",
    stack: [
      { name: "React.js" },
      { name: "Bootstrap" },
      { name: "Tailwind" },
    ],
    image: "/assets/work/esa-gumussuyu-ss.png",
    live: "https://www.ilkcan.me/work",
    github: "https://github.com/ilkcanirturk",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* Sol taraftaki içerik aynı */}
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
            {project.title} - {project.category}
            </h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            <div className="border border-white/20 my-4"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent group-hover:scale-125 transition-all duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent group-hover:scale-125 transition-all duration-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[525px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project picture"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* Slider Buttons */}
              <SliderButtons
                containerStyles="flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="text-primary w-[48px] h-[48px] flex justify-center items-center transition-all rounded-[10px]"
                iconsStyles="text-5xl"
                activeIndex={activeIndex}
                lastIndex={projects.length}
              />

              {/* Progress Bars */}
              <div className="flex gap-2 justify-end xl:absolute xl:bottom-14 xl:right-0 z-20 mt-4 xl:mt-0">
                {projects.map((_, idx) => (
                  <div
                    key={idx}
                    className={`
                      transition-all duration-300
                      ${
                        idx === activeIndex
                          ? "h-1 w-10 bg-accent"
                          : "h-[2px] w-5 bg-white/20"
                      }
                    `}
                  />
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
