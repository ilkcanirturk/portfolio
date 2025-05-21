"use client";

import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";

const HomeContent = () => {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <span className="text-xl">Software Engineer</span>
      <h1 className="h1 mb-6">
        Hi there I'm <br />
        <span className="text-accent">İlkcan Irtürk</span>
      </h1>
      <p className="max-w-[500px] mb-9 text-white/80">
        I enjoy creating user-friendly and engaging digital products, providing
        tailored solutions to meet specific needs, and I'm comfortable working
        with a wide range of tools and technologies.
      </p>
      <div className="flex flex-col xl:flex-row items-center gap-4">
        <a
          href="/assets/resume/CV-EN-ilkcanirturk.pdf"
          download="CV-EN-ilkcanirturk.pdf"
          className="text-xl uppercase flex items-center gap-2 border text-accent hover:bg-accent hover:text-primary rounded-full border-accent py-2 px-4 hover:scale-110 transition-all duration-300"
        >
          <span>CV-EN</span>
          <FiDownload className="text-xl" />
        </a>
        <a
          href="/assets/resume/CV-TR-ilkcanirturk.pdf"
          download="CV-TR-ilkcanirturk.pdf"
          className="text-xl uppercase flex items-center gap-2 border text-accent hover:bg-accent hover:text-primary rounded-full border-accent py-2 px-4 hover:scale-110 transition-all duration-300"
        >
          <span>CV-TR</span>
          <FiDownload className="text-xl" />
        </a>
        <div className="mb-8 xl:mb-0">
          <Social
            containerStyles="flex gap-4"
            iconStyles="p-3 border border-accent rounded-full flex justify-center text-accent text-2xl hover:scale-125 hover:bg-accent hover:text-primary hover:transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
