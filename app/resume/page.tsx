import React from "react";
import { Metadata } from "next";
import { resumeItems } from "../static/resume";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="lg:px-8 lg:py-12 px-6 py-8">
      <h1 className=" text-4xl font-bold text-gray-800 ">Resume</h1>
      <hr className="my-3 border-gray-600" />
      <p>
        Hello! My name is Sadman Sakib, and I am a dedicated full-stack web
        developer seeking new opportunities to enhance my skills and take my
        career to the next level.
      </p>

      <p>
        As someone who is constantly learning and improving, I am excited to
        bring my expertise to a dynamic and challenging work environment. I
        possess a diverse range of skills, including:
      </p>

      {resumeItems.map((item, index) => (
        <div key={index}>
          <h4 className="text-lg font-bold text-gray-800 mt-6">
            {item.category}:
          </h4>

          <ul className="list-disc ml-4">
            {item.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
