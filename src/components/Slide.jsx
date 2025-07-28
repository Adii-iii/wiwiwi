import React from "react";
import { motion } from "framer-motion";
import EnvelopeGrid from "./EnvelopeGrid";
import SEnvelopeGrid from "./SingleEnvelopeGrid";
import title from "../assets/title.mp4";
import bgVideo from "../assets/bg.mp4"; 


const Slide = ({ data, setModalContent, currentSlide }) => {
  const [zoomImg, setZoomImg] = React.useState(null);

  // For envelope slides, do NOT center vertically
  // For others, center vertically on small screens only
  const slideClass =
    data.type === "envelopes"
      ? "absolute inset-0 flex flex-col items-center text-center p-8 overflow-y-auto min-h-0"
      : "absolute inset-0 flex flex-col items-center text-center p-8 overflow-y-auto min-h-0 justify-center";

  // Use title.mp4 for the first slide, bg.mp4 for others
  const videoSrc = currentSlide === 0 ? title : bgVideo;

  React.useEffect(() => {
    if (!zoomImg) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setZoomImg(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImg]);

  return (
    <motion.div
      className={slideClass}
      style={{ background: data.background || "#D8E0EF" }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.05 }}
    >

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc} 
      />

      <div className="z-10 w-full flex flex-col items-center">
        {/* 📦 Envelope Slide */}
        {data.type === "envelopes" && (
          <EnvelopeGrid blocks={data.items} onBlockClick={setModalContent} />
        )}

        {data.type === "single_envelope" && (
          <SEnvelopeGrid blocks={data.items} onBlockClick={setModalContent} />
        )}

        {/* 🖼️ Image Gallery */}
        {data.images && Array.isArray(data.images) && (
          <div className="w-full flex flex-wrap justify-center gap-4 mt-8">
            {data.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide Image ${idx}`}
                style={{
                  width: "28%",
                  // maxWidth: "700px",
                  // maxHeight: "400px",
                  borderRadius: "1rem",
                  cursor: "zoom-in"
                }}
                onClick={() => setZoomImg(img)}
              />
            ))}
          </div>
        )}

        {/* 🖼️ Fonts */}
        {data.font && Array.isArray(data.font) && (
          <div className="w-full flex flex-wrap justify-center gap-4 mt-8">
            {data.font.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide Image ${idx}`}
                style={{
                  width: "75%",        // or any px value
                  // maxWidth: "800px",   // maximum width
                  // maxHeight: "4000px",  // maximum height
                  borderRadius: "1rem" // rounded corners
                }}
              />
            ))}
          </div>
        )}

        {/* 📝 Default Text Slide */}
        {!data.type && (
          <>
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg max-w-2xl">{data.content}</p>
          </>
        )}

        {/* Modal for zoomed image */}
        {zoomImg && (
          <div
            className="fixed inset-0 bg-black/80 flex items-start justify-center z-50"
            onClick={() => setZoomImg(null)}
            style={{ cursor: "zoom-out" }}
          >
            <div
              className="max-h-[98vh] max-w-[98vw] overflow-auto flex items-start justify-center p-4"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={zoomImg}
                alt="Zoomed"
                style={{
                  maxHeight: "195vh",
                  maxWidth: "195vw",
                  borderRadius: "1rem",
                  boxShadow: "0 0 24px #0008",
                  cursor: "zoom-out"
                }}
                onClick={() => setZoomImg(null)}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Slide;
