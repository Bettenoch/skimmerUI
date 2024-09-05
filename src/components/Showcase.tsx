import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Showcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { once: false });

  return (
    <div className="flex w-full justify-center items-center">
      <div className="relative w-full mt-8 p-6 overflow-hidden rounded-lg">
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />
        <motion.video
          ref={videoRef}
          className="w-[500px] object-cover rounded-lg"
          muted
          autoPlay={isInView}
          playsInline
        >
          <source src="/studyVlog.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default Showcase;
