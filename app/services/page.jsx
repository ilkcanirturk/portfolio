"use client";

import { BsArrowDownLeft } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Building fast, secure, and scalable websites tailored to meet your business needs.",
    href: "",
  },
  {
    num: "02",
    title: "UX/UI Design",
    description:
      "Crafting intuitive and visually engaging designs that enhance user experience.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Building high-performing, responsive mobile apps with cross-platform solutions for iOS and Android.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimizing your digital presence to improve search engine rankings and reach your audience effectively.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="group relative w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-180"
                  >
                    <BsArrowDownLeft className="text-primary text-3xl transition-transform duration-500 group-hover:scale-125"/>
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
