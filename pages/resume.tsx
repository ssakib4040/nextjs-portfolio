import React from "react";

export default function Resume() {
  interface ResumeItem {
    category: string;
    skills: string[];
  }

  const resumeItems: ResumeItem[] = [
    {
      category: "Front End",
      skills: [
        "HTML 5",
        "CSS 3",
        "Javascript",
        "TypeScript",
        "Bootstrap",
        "Tailwind CSS",
        "React JS",
        "Next JS",
      ],
    },

    {
      category: "Back End",
      skills: ["Node JS", "Express JS", "GraphQL", "Python (Basic)", "Azure"],
    },

    {
      category: "Tools & Technologies",
      skills: [
        "Git (VCS)",
        "Github",
        "Visual Studio Code",
        "Chrome Dev Tools",
        "NPM",
        "Yarn",
        "RESTful APIs",
        "JSON",
        "JWT",
        "Parcel JS",
        "Docusaurus",
        "Cypress",
        "Mocha",
        "Postman",
        "Netlify",
        "Vercel",
      ],
    },

    {
      category: "Database",
      skills: ["MongoDB", "Mongoose(ODM)", "MySQL", "Firebase"],
    },
  ];

  return (
    <div className="px-8 py-10">
      <h2 className="text-3xl font-medium">Resume</h2>
      <hr className="my-3 border-gray-400 border-1" />

      <p className="mb-3">
        Hello! My name is Sadman Sakib, and I am a dedicated full-stack web
        developer seeking new remote opportunities to enhance my skills and take
        my career to the next level.
      </p>

      <p className="mb-3">
        As someone who is constantly learning and improving, I am excited to
        bring my expertise to a dynamic and challenging work environment. I
        possess a diverse range of skills, including:
      </p>

      <ul className="list-disc ml-5 mb-3 resume">
        {resumeItems.map((item: any) => (
          <li key={item.category} className="mb-3">
            <span className="font-bold">{item.category}: </span>
            {item.skills.join(", ")}
          </li>
        ))}
      </ul>

      <p className="mb-3">
        I prioritize simplicity and functionality in my web development
        projects, and I understand that sometimes less is more when it comes to
        web design. Rather than relying on fancy CSS animations, I focus on
        creating user-friendly and efficient websites that prioritize the user
        experience.
      </p>

      <p className="mb-3">
        I look forward to utilizing my skills and passion for web development in
        my next role. Whether I&apos;m working on a simple landing page or a
        complex web application, I always prioritize clean code and efficient
        design. As someone who is constantly learning and improving, I&apos;m
        excited to bring my skills to a new challenge and take my career to the
        next level. I believe that collaboration and communication are key to
        any successful project, and I&apos;m always eager to work with a dynamic
        team.
      </p>

      <p>Thank you for considering my application!</p>
    </div>
  );
}
