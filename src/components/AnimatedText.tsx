"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

type AnimatedTextProps = {
  text: string; // The text to be animated.
};

export default function AnimatedText({ text }: AnimatedTextProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    // Function to handle the forward and backward animation
    const animateText = async () => {
      while (true) {
        // Animate forward
        await new Promise<void>((resolve) => {
          animate(count, text.length, {
            type: "tween",
            duration: 10,
            ease: "linear",
            onComplete: resolve,
          });
        });

        // Animate backward
        await new Promise<void>((resolve) => {
          animate(count, 0, {
            type: "tween",
            duration: 10,
            ease: "linear",
            onComplete: resolve,
          });
        });
      }
    };

    // Start the animation loop
    animateText();

    // Cleanup function to stop the animation if the component unmounts
    return () => {
      count.stop();
    };
  }, [text, count]);

  return (
    <p className="text-center text-sm md:text-base lg:text-xl">
      <motion.span>{displayText}</motion.span>
    </p>
  );
}
