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
        "CSS 3  (Grid, Flexbox, Media Queries)",
        "Javascript (ES6+)",
        "TypeScript",
        "React JS",
        "Next JS",
      ],
    },

    {
      category: "CSS Frameworks",
      skills: ["Bootstrap", "Tailwind CSS"],
    },

    {
      category: "React UI Libraries",
      skills: [
        // "Material UI",
        // "Chakra UI",
        // "Ant Design",
        "React Bootstrap",
        // "Reactstrap",
        // "Styled Components",
        // "Emotion",
      ],
    },

    {
      category: "React State Management",
      // "React Query", "Zustand", "Recoil", "Jotai",
      skills: ["Redux", "MobX", "React Context API"],
    },

    {
      category: "Back End",
      skills: ["Node JS", "Python (Basic)", "Azure"],
    },

    {
      category: "Version Control",
      skills: ["Git", "Github"],
    },

    {
      category: "Back End Frameworks",
      skills: ["Express JS", "GraphQL", "Apollo Server"],
    },

    {
      category: "Database",
      skills: ["MongoDB & Mongoose(ODM)", "MySQL", "Firebase"],
    },

    {
      category: "Package Managers",
      skills: ["NPM", "Yarn"],
    },

    {
      category: "Tools & Technologies",
      skills: [
        "Visual Studio Code",
        "Chrome Dev Tools",
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

      <ul className="ml-5 mb-3 resume dev">
        {resumeItems.map((item: any) => (
          <li key={item.category} className="mb-3 dev">
            <span className="font-bold">{item.category}: </span>

            <ul className="list-disc ms-8">
              {item.skills.map((skill: any) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
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
