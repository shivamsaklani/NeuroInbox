"use client";

import React from "react";
import { useMotionValue, useTransform, animate } from "motion/react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";
import Image from "next/image";
import Icon from "../../public/favicon.png";
import { Mail } from "lucide-react";
export default function Splashscreen() {
  const progress = useMotionValue(0);

  React.useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => controls.stop();
  }, [progress]);

  const pathLengthFirst = useTransform(progress, [0, 1], [0.2, 1.2]);
  const pathLengthSecond = useTransform(progress, [0, 1], [0.15, 1.2]);
  const pathLengthThird = useTransform(progress, [0, 1], [0.1, 1.2]);
  const pathLengthFourth = useTransform(progress, [0, 1], [0.05, 1.2]);
  const pathLengthFifth = useTransform(progress, [0, 1], [0, 1.2]);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      >
        <div className="font-bold bg-linear-to-r from-blue-300 to-green-300 rounded-full md:px-2 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs  w-fit mx-auto overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <span className="p-5"><Mail className="h-30 w-30 text-white"/></span></div>
        </div>
      

 </GoogleGeminiEffect>
    </div>
  );
}
