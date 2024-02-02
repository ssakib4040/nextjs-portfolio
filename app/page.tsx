"use client";

import { TypeAnimation } from "react-type-animation";

const typeAnimationSequence = [
  "I am a web developer",
  1000,
  "I am a frontend developer",
  1000,
  "I am a backend developer",
  1000,
  "We produce food for Chinchillas",
  1000,
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* title */}
      <h1 className="text-4xl font-bold text-center mb-3">
        My name is <span className="text-[#0D6EFD]">MD Sadman Sakib</span>
      </h1>

      {/* description */}
      <TypeAnimation
        sequence={typeAnimationSequence}
        speed={40}
        repeat={Infinity}
        className="text-2xl font-bold text-center text-[#6b7280]"
      />
    </div>
  );
}
