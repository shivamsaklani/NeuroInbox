"use client";

import React from "react";
import { animate, useMotionValue, useTransform } from "motion/react";
import { Mail } from "lucide-react";
import { Progress } from "../ui/progress";

export default function Splashscreen() {
  const progress = useMotionValue(0);
  const progressPercent = useTransform(progress, [0, 1], [0, 100]);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(progress, 1, {
      duration: 6,
      ease: "linear",
      repeat: Infinity,
    });

    const unsubscribe = progressPercent.on("change", (v) =>
      setValue(Math.round(v))
    );

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [progress, progressPercent]);

  return (
    <div className="h-screen w-screen overflow-hidden justify-center items-center flex flex-col gap-4">
     
    <div className="mx-auto mt-8 w-fit overflow-hidden rounded-full bg-linear-to-r from-blue-300 to-green-300 px-2 py-1 text-xs font-bold text-black md:mt-24 md:px-2 md:py-2 md:text-base">
      <div className="flex flex-col items-center justify-center">
        <span className="p-5">
          <Mail className="h-30 w-30 text-white" />
        </span>
       
      </div>
      
    </div>
      <Progress value={value} className="w-1/6" />
    </div>
  );
}
