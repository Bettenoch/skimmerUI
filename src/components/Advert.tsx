import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";

const Advert: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close the expanded video
  useClickAway(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleCloseVideo = () => {
    setIsExpanded(false);
    setIsMuted(true);
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <motion.div
        ref={containerRef}
        className={`relative overflow-hidden bg-black rounded-lg shadow-lg transition-all duration-500 ease-in-out
        ${isExpanded ? "fixed top-0 left-0 w-full h-full z-50" : "w-[300px] md:w-[500px]"}`}
      >
        <video
          ref={videoRef}
          src="/studyVlog.mp4" // Replace with your video source
          autoPlay
          muted={isMuted}
          loop
          className="w-full h-full object-cover"
        />
        <motion.button
          onClick={handleMuteToggle}
          className="absolute top-2 right-2 bg-white text-black p-2 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isMuted ? "Unmute" : "Mute"}
        </motion.button>

        {isExpanded && (
          <motion.button
            onClick={handleCloseVideo}
            className="absolute top-2 left-2 bg-red-600 text-white p-2 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Close
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default Advert;
