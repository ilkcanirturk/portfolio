'use client'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import ModeSwitch from "./animations/ModeSwitch";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = ({ theme, toggleTheme }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false); 

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <motion.div 
          whileTap={{ rotate: 45 }} 
          transition={{ duration: 0.2 }}
        >
          <CiMenuFries className="text-[32px] text-accent" />
        </motion.div>
      </SheetTrigger>
      
      <SheetContent
        className="flex flex-col h-full overflow-y-auto py-6"
        aria-describedby={undefined}
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        <div className="flex flex-col flex-1 justify-center min-h-0">
          {/* Logo */}
          <div className="mb-12 sm:mb-16 text-center">
            <Link href="/" onClick={closeMenu}>
              <h1 className="text-3xl sm:text-4xl font-semibold">
                İlkcan<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          {/* ModeSwitch */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <ModeSwitch theme={theme} toggleTheme={toggleTheme} />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-4 sm:gap-6">
            {links.map((link, index) => (
              <Link
                href={link.path}
                key={index}
                onClick={closeMenu}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent text-lg sm:text-xl"
                    : "text-base sm:text-lg"
                } capitalize hover:text-accent transition-all py-1`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

