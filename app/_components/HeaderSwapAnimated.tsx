"use client";
import { motion } from "framer-motion";

export default function HeaderSwapAnimated() {
  return (
    <div className="relative z-1000 flex justify-center w-full ">
      <button className="h-25 p-2 w-14.5 flex justify-center border-2  rounded-full ">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "130%" }}
          transition={{ duration: 2, repeatType: "reverse", repeat: Infinity }}
          className="h-10 w-full bg-green-900 rounded-full"></motion.div>
      </button>
    </div>
  );
}
