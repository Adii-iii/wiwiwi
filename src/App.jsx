import React, { useState } from "react";
import Slide from "./components/Slide";
import EnvelopeGrid from "./components/EnvelopeGrid";
import Modal from "./components/Modal";
import slidesData from "./data/slidesData";
import { AnimatePresence } from "framer-motion";

import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";

import leftArrow from "./assets/left-arrow.png";
import rightArrow from "./assets/right-arrow.png";


console.log("App rendered");

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalContent, setModalContent] = useState(null);

  const nextSlide = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative w-screen h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <Slide 
        key={currentSlide} 
        data={slidesData[currentSlide]} 
        setModalContent={setModalContent}
        />
      </AnimatePresence>

      {/* Left Arrow */}
{currentSlide > 0 && (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "16px",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  >
    <IconButton onClick={prevSlide} sx={{ p: 0 }}>
      <img
        src={leftArrow}
        alt="Previous"
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
      />
    </IconButton>
  </Box>
)}


      {/* Right Arrow */}
      {currentSlide < slidesData.length - 1 && (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      right: "16px",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  >
    <IconButton onClick={nextSlide} sx={{ p: 0 }}>
      <img
        src={rightArrow}
        alt="Next"
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
      />
    </IconButton>
  </Box>
)}

  <Modal content={modalContent} onClose={() => setModalContent(null)} />

    </div>
  );
};

export default App;
