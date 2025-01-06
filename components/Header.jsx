// // import Link from "next/link";
// // import { Button } from "./ui/button";
// // import { motion } from "framer-motion";

// // // components
// // import Nav from "./Nav";
// // import MobileNav from "./MobileNav";

// // const Header = () => {
// //   return (
// //     <header className="py-8 xl:py-12 text-white">
// //       <div className="container mx-auto flex justify-between items-center">
// //         {/* logo */}
// //         <Link href={"/"}>
// //           <h1 className="text-4xl font-semibold">
// //             İlkcan <span className="text-accent">.</span>
// //           </h1>
// //         </Link>

// //         {/* Desktop Nav & hire me button */}
// //         <div className="hidden xl:flex items-center gap-8">
// //           <Nav />
// //           <Link href="/contact">
// //             <motion.div
// //               initial={{ scale: 1 }}
// //               animate={{ scale: 1.1 }}
// //               transition={{
// //                 duration: 0.8,
// //                 repeat: Infinity,
// //                 repeatType: "reverse",
// //                 ease: "easeInOut",
// //               }}
// //             >
// //               <Button>Hire me</Button>
// //             </motion.div>
// //           </Link>
// //         </div>

// //         {/* mobile nav */}
// //         <div className="xl:hidden">
// //           <MobileNav />
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;

// import Link from "next/link";
// import { Button } from "./ui/button";
// import { motion } from "framer-motion";

// // components
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   return (
//     <header className="py-8 xl:py-12 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* logo */}
//         <Link href={"/"}>
//           <h1 className="text-4xl font-semibold">
//             İlkcan <span className="text-accent">.</span>
//           </h1>
//         </Link>

//         {/* Desktop Nav & hire me button */}
//         <div className="hidden xl:flex items-center gap-8">
//           <Nav />
//           <Link href="/contact">
//             <motion.div
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.1 }}
//               transition={{
//                 duration: 0.8,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//               whileHover="hover"
//             >
//               <Button className="group relative overflow-hidden">
//                 <motion.span
//                   className="relative z-10 group-hover:text-white transition-colors duration-200"
//                 >
//                   Hire me
//                 </motion.span>
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-85"
//                   initial={{ x: "-100%" }}
//                   variants={{
//                     hover: {
//                       x: "100%",
//                       transition: {
//                         duration: 1,
//                         ease: "easeInOut",
//                         repeat: Infinity
//                       },
//                     },
//                   }}
//                 />
//               </Button>
//             </motion.div>
//           </Link>
//         </div>

//         {/* mobile nav */}
//         <div className="xl:hidden">
//           <MobileNav />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { motion } from "framer-motion";

// // components
// import Nav from "./Nav";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   const [theme, setTheme] = useState("dark");

//   // theme değişikliğini localStorage'a kaydet
//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   // sayfa yüklendiğinde theme'i localStorage'dan al
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.classList.add(savedTheme);
//     }
//   }, []);

//   return (
//     <header className="py-8 xl:py-12 text-white">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* logo */}
//         <Link href={"/"}>
//           <h1 className="text-4xl font-semibold">
//             İlkcan <span className="text-accent">.</span>
//           </h1>
//         </Link>

//         {/* Desktop Nav & hire me button */}
//         <div className="hidden xl:flex items-center gap-8">
//           <Nav />
//           <Link href="/contact">
//             <motion.div
//               initial={{ scale: 1 }}
//               animate={{ scale: 1.1 }}
//               transition={{
//                 duration: 0.8,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//               whileHover="hover"
//             >
//               <Button className="group relative overflow-hidden">
//                 <motion.span className="relative z-10 group-hover:text-white transition-colors duration-200">
//                   Hire me
//                 </motion.span>
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-85"
//                   initial={{ x: "-100%" }}
//                   variants={{
//                     hover: {
//                       x: "100%",
//                       transition: {
//                         duration: 1,
//                         ease: "easeInOut",
//                         repeat: Infinity,
//                       },
//                     },
//                   }}
//                 />
//               </Button>
//             </motion.div>
//           </Link>
//           {/* Dark Mode Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="text-2xl bg-gray-700 p-2 rounded-full dark:bg-gray-300 dark:text-black"
//           >
//             {theme === "dark" ? "🌙" : "🌞"}
//           </button>
//         </div>

//         {/* Mobile nav */}
//         <div className="xl:hidden">
//           <MobileNav />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ModeSwitch from "./animations/ModeSwitch";

const Header = () => {
  const [theme, setTheme] = useState("light");

  // Tema geçişini kontrol et
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Sayfa yüklendiğinde theme'i localStorage'dan al
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            İlkcan <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover="hover"
            >
              <Button className="group relative overflow-hidden">
                <motion.span
                  className="relative z-10 group-hover:text-white transition-colors duration-200"
                >
                  Hire me
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-85"
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: {
                      x: "100%",
                      transition: {
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                      },
                    },
                  }}
                />
              </Button>
            </motion.div>
          </Link>
          {/* theme switch button */}
          <ModeSwitch theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default Header;