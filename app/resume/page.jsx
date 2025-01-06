"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiGit,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

import ReactIconAnimated from "@/components/animations/ReactIconAnimated";
import ClimbAnimation from "@/components/animations/ClimbAnimation";
import ExperienceAnimation from "@/components/animations/ExperienceAnimation";
import AboutAnimation from "@/components/animations/AboutAnimation";

//about data
const about = {
  title: "About me",
  description:
    "I'm a passionate Software Engineer with more than 3 years of experience creating user-friendly and visually appealing web and mobile applications. I specialize in React.js, Next.js, and modern web technologies. Let's create something amazing together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "İlkcan Irtürk",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Turkish",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Turkish",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "ilkcan.irturk@outlook.com",
    }
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "My experience spans across creating engaging user interfaces and robust applications, always focusing on delivering value and innovation.",
  items: [
    {
      company: "Erciyes Anadolu Holding",
      position: "Front-End Developer",
      duration: "Feb 2023 - Present",
    },
    {
      company: "Turkcell - Future Writers Bootcamp Program 2.0",
      position: "Bootcamp Student",
      duration: "Feb 2023 - Jul 2023",
    },
    {
      company: "Patika.dev & Akbank React Native Bootcamp",
      position: "Bootcamp Student",
      duration: "Aug 2022 - Sep 2022",
    },
    {
      company: "Republic Of Türkiye Ministry Of National Defence",
      position: "Computer Engineer Lieutenant",
      duration: "Jul 2021 - Jul 2022",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Education has been a cornerstone of my development as a developer, providing me with the skills and knowledge to excel in this field. Check out the highlights of my journey below.",
  items: [
    {
      institution: "Udemy - Online Course",
      degree: "Modern React with Redux",
      duration: "2024",
    },
    {
      institution: "Turkcell - Future Writers Bootcamp Program 2.0",
      degree: "Front-End Web Development",
      duration: "Feb 2023 - Jul 2023",
    },
    {
      institution: "Patika.dev & Akbank React Native Bootcamp",
      degree: "Mobile Application Development",
      duration: "Feb 2023 - Jul 2023",
    },
    {
      institution: "Turkcell Future Writers",
      degree: "Web Development (React.js)",
      duration: "2022",
    },
    {
      institution: "Patika.dev",
      degree: "Front-End Web Development",
      duration: "2022",
    },
    {
      institution: "Erciyes University",
      degree: "Bachelor's Degree - Computer Engineering",
      duration: "2015 - 2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Here are the technologies I work with to turn ideas into functional and visually engaging applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiGit />,
      name: "git",
    },
    {
      icon: <DiMsqlServer />,
      name: "msqlserver",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 p-4 rounded-xl">
            <TabsTrigger
              className="hover:text-accent hover:bg-accent/10 "
              value="experience"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              className="hover:text-accent hover:bg-accent/10"
              value="education"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              className="hover:text-accent hover:bg-accent/10"
              value="skills"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              className="hover:text-accent hover:bg-accent/10"
              value="about"
            >
              About me
            </TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="flex-1 min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full h-[580px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-3xl xl:text-4xl font-bold">
                    {experience.title}
                  </h3>
                  <span>
                    <ExperienceAnimation />
                  </span>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[500px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-[#2c2c34] transition-colors duration-300"
                        >
                          <span className="text-accent text-sm">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="inline-block w-[12px] h-[12px] rounded-full bg-accent flex-shrink-0"></span>
                            <p className="text-white/60 text-sm">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full h-[580px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left h-full">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-3xl xl:text-4xl font-bold">
                    {education.title}
                  </h3>
                  <span>
                    <ClimbAnimation />
                  </span>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[500px] w-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 hover:bg-[#2c2c34] transition-colors duration-300"
                        >
                          <span className="text-accent text-sm">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="inline-block w-[12px] h-[12px] rounded-full bg-accent flex-shrink-0"></span>
                            <p className="text-white/60 text-sm">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-[580px]">
              <div className="flex flex-col gap-[30px] h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <div className="flex flex-row justify-between items-center">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <span>
                      <ReactIconAnimated />
                    </span>
                  </div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[500px] w-full">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 hover:scale-125">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-accent capitalize">
                                  {skill.name}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full h-[580px] text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] h-full">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <span>
                    <AboutAnimation />
                  </span>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[500px] w-full">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span>
                            <span className="text-white/60 hover:cursor-default">
                              {item.fieldName}
                            </span>
                            <span className="text-lg text-accent">:</span>
                          </span>
                          <span className="text-xl hover:text-accent hover:cursor-default">
                            {item.fieldValue}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
