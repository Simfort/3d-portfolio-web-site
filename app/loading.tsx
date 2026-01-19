"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex fixed top-0 bottom-0 bg-gray-700 left-0 right-0 flex-col items-center justify-center">
      <h2>
        Welcome to my portfolio
        {new Array(3).fill(".").map((point, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [1, 0] }}
            transition={{ delay: i * 0.1 }}
            key={i}>
            {point}
          </motion.span>
        ))}
      </h2>
      <div className="h-[100px] w-[100px] bg-green-700 animate-spin"></div>
    </div>
  );
}
