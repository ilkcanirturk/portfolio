"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const HomeContent = dynamic(() => import("@/components/HomeContent"), { ssr: false });
const Photo = dynamic(() => import("@/components/Photo"), { ssr: false });
const Stats = dynamic(() => import("@/components/Stats"), { ssr: false });

const Homepage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="h-full">
      <div className="container mx-auto h-full sm:px-6 lg:px-2">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <HomeContent />
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Homepage;