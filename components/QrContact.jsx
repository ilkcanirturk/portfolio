"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const QrContact = () => {
  return (
    <div className="flex justify-center xl:justify-end">
      <div className="bg-[#27272c] w-full max-w-[320px] h-[300px] flex items-center justify-center rounded-[20px] shadow-lg">
        <motion.div
          className="w-[250px] h-[250px] relative"
          animate={{
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/contactme-qr.png"
            width={250}
            height={250}
            alt="links"
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default QrContact;
