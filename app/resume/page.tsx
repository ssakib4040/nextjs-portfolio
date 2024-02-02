import React from "react";

interface ResumeItem {
  category: string;
  skills: string[];
}

const resumeItems: ResumeItem[] = [
  {
    category: "Front End",
    skills: [
      "HTML 5",
      "CSS 3  (Grid, Flexbox, Media Queries & Sass)",
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
    skills: ["Node JS", "Python (Basic)"],
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
    category: "Testing Libraries",
    skills: ["React Testing Library", "Cypress", "Mocha"],
  },

  {
    category: "Bundlers",
    skills: ["Parcel JS"],
  },

  {
    category: "Tools & Technologies",
    skills: [
      "Visual Studio Code",
      "Chrome Dev Tools",
      "RESTful APIs",
      "Docusaurus",
      "Postman",
      "JSON",
      "JWT",
    ],
  },

  {
    category: "Deployment",
    skills: ["Azure", "Vercel", "Netlify", "Github Pages"],
  },
];

export default function page() {
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

      {/* <div>
        <h4 className="text-2xl font-bold text-gray-800 mt-6">Skills</h4>

        <ul className="list-disc ml-4">
          <li>Item number X</li>
          <li>Item number X</li>
          <li>Item number X</li>
          <li>Item number X</li>
          <li>Item number X</li>
        </ul>
      </div> */}
    </div>
  );
}
