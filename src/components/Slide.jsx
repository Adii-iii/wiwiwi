import React, { useState } from "react";
import { motion } from "framer-motion";
import EnvelopeGrid from "./EnvelopeGrid";

const Slide = ({ data, setModalContent }) => {
  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
      style={{ background: data.background || "#1a202c" }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.05 }}
    >
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
    </motion.div>
  );
};

export default Slide;
