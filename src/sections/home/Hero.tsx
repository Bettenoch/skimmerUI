import React from "react";
import { samplePrompts } from "@/constants";
import AnimatedText from "@/components/AnimatedText";

const Hero: React.FC = () => {
  const randomPrompt =
    samplePrompts[Math.floor(Math.random() * samplePrompts.length)];
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url(/background/studybg.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full pt-24 md:pt-32 lg:pt-48">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Unleash the Power of AI-Powered PDF Analysis
          </h1>
          <p className="text-xl mb-6">
            Upload your documents, ask your questions, and get accurate,
            AI-driven insights in seconds. Our advanced LLM technology combines
            the power of Llama, Index, Agentic RAGs, and OpenAI to deliver
            precise answers tailored to your needs.
          </p>
          <div className="flex flex-col gap-8 pt-8 items-center justify-center">
            <div className="flex items-center rounded-lg bg-white text-zinc-500 w-11/12 md:w-6/12">
              <div className="flex-1">
                <AnimatedText text={randomPrompt} />
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold py-2 px-4 ">
                search
              </button>
            </div>

            <div className="pt-6">
              <button
                className="group relative cursor-pointer overflow-hidden whitespace-nowrap px-6 py-4  text-white [background:var(--bg)] [border-radius:var(--radius)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(62,61,117,0.7)] flex justify-end left-0"
                style={
                  {
                    "--spread": "90deg",
                    "--shimmer-color": "#ffffff",
                    "--radius": "100px",
                    "--speed": "1.5s",
                    "--cut": "0.1em",
                    "--bg":
                      "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 61, 117), rgba(18, 18, 38))",
                  } as React.CSSProperties
                }
              >
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-[-100%] rotate-gradient">
                    <div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]"></div>
                  </div>
                </div>
                <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white">
                  Get started now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
