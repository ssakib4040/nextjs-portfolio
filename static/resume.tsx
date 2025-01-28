interface ResumeItem {
  category: string;
  skills: string[];
}

export const resumeItems: ResumeItem[] = [
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
      "Daisy UI",
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
