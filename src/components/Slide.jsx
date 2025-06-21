import React from "react";
import { motion } from "framer-motion";
import EnvelopeGrid from "./EnvelopeGrid";

const Slide = ({ data, setModalContent }) => {
  // For envelope slides, do NOT center vertically
  // For others, center vertically on small screens only
  const slideClass =
    data.type === "envelopes"
      ? "absolute inset-0 flex flex-col items-center text-center p-8 overflow-y-auto min-h-0"
      : "absolute inset-0 flex flex-col items-center text-center p-8 overflow-y-auto min-h-0 justify-center";

  return (
    <motion.div
      className={slideClass}
      style={{ background: data.background || "#1a202c" }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.05 }}
    >
      <div className="w-full flex flex-col items-center">
        {/* 📦 Envelope Slide */}
        {data.type === "envelopes" && (
          <EnvelopeGrid blocks={data.items} onBlockClick={setModalContent} />
        )}

        {/* 📝 Default Text Slide */}
        {!data.type && (
          <>
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg max-w-2xl">{data.content}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Slide;
