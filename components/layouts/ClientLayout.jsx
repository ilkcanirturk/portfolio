"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const StairTransition = dynamic(() => import("@/components/animations/StairTransition"), { ssr: false });
const PageTransition = dynamic(() => import("@/components/animations/PageTransition"), { ssr: false });
const ToasterContact = dynamic(() => import("@/components/ToasterContact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });


export default function ClientLayout({ children }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition />
      <ToasterContact />
      <main className="min-h-screen flex flex-col">
        {children}
        <Footer />
      </main>
    </>
  );
}