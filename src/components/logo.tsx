import React from "react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="absolute top-2 sm:top-4 left-2 sm:left-4 flex items-center cursor-pointer z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-24 sm:w-24 md:w-24 ">
        <img
          src="\images\White.png"
          alt="Panch Parivartan Logo"
          className="w-full h-auto object-contain"
        />
      </div>
    </motion.div>
  );
}