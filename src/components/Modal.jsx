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
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2">{content.label}</h2>
        {content.description && (
          <p className="mb-2 italic text-gray-700">{content.description}</p>
        )}

        {content.images && (
          <div
            className="w-full"
            style={{
              columns: 2,
              columnGap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            {content.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Memory ${idx}`}
                className="mb-3 rounded-xl w-full"
                style={{
                  display: "inline-block",
                  width: "100%",
                  breakInside: "avoid",
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
