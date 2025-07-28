// src/components/Modal.jsx

import React, { useEffect, useRef } from "react";

const Modal = ({ content, onClose }) => {
  const backdropRef = useRef(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!content) return null;

  // Close modal when clicking the backdrop
  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/60 flex justify-center items-start z-50 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full flex flex-col items-center mt-8">
        <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Manga TempleI', sans-serif" }}>{content.label}</h2>
        {/* {content.description && (
          <p className="mb-2 italic text-gray-700">{content.description}</p>
        )} */}

        {content.images && (
          <div
            className="w-full"
            style={{
              columns: 1,
              columnGap: "0rem",
              marginBottom: "0rem",
            }}
          >
            {content.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Memory ${idx}`}
                className="mb-3 rounded-xl"
                style={{
                  width: "82%",
                  display: "inline-block",
                  breakInside: "avoid",
                  marginLeft: "9%",
                }}
              />
            ))}
          </div>
        )}

        <button
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
