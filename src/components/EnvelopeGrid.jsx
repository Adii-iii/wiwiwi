import React from "react";
import { motion } from "framer-motion";
import fileIcon from "../assets/file.png"; // Adjust path if needed

const shakeTransition = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 0.6,
  ease: "easeInOut",
};

const EnvelopeGrid = ({ blocks, onBlockClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-10 max-w-5xl mx-auto">
      {blocks.map((block, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => onBlockClick(block)}
        >
          <div className="aspect-square w-64 bg-white/10 rounded-2xl flex items-center justify-center">
            <motion.img
              src={fileIcon}
              alt="File Icon"
              className="w-40 h-40 object-contain"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={shakeTransition}
            />
          </div>
          <p className="mt-6 text-lg text-center">{block.label}</p>
        </div>
      ))}
    </div>
  );
};

export default EnvelopeGrid;
