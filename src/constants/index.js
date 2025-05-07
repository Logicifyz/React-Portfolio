import ProjectRentral from "../assets/projects/ProjectRentral.jpg";
import ProjectMS from "../assets/projects/ProjectMS.png";
import ProjectDotnet from "../assets/projects/ProjectDotnet.png";
import ProjectCSGO from "../assets/projects/ProjectCSGO.jpeg";
import ProjectPortfolio from "../assets/projects/ProjectPortfolio.png";

export const HERO_CONTENT = `I'm an aspiring full-stack developer currently pursuing a Diploma in Information Technology at Nanyang Polytechnic. I have hands-on experience in both front-end and back-end development, working with technologies like HTML, CSS, JavaScript, Node.js, Python, and C#. I specialize in building responsive interfaces and scalable server-side applications, backed by strong knowledge of MySQL databases. Through various projects—including e-commerce platforms and personal portfolios—I’ve developed practical skills in delivering real-world web solutions.`;

export const ABOUT_TEXT = `I'm a full-stack developer in training with a passion for building scalable and user-focused web applications. With hands-on experience in React, Node.js, MySQL, and Python, I've worked on projects ranging from e-commerce platforms to AI-driven tools. I enjoy solving real-world problems through code and thrive in collaborative team environments. Always eager to learn, I actively explore new technologies to stay current and grow as a developer.`;

export const EXPERIENCES = [
  {
    year: "2022 April - 2026 April",
    role: "Diploma Student in Information Technology",
    company: "Nanyang Polytechnic",
    description: `Developed a strong foundation across key areas in IT, completing diverse projects using technologies such as HTML/CSS, JavaScript, Python, and C#. Gained practical experience in both front-end and back-end development, as well as database management.`,
    technologies: ["HTML/CSS", "JavaScript", "Python", "C#", "MySQL", "React", "Node.js"],
  },
  {
    year: "2025 May - Current",
    role: "Full Stack AI Developer Intern",
    company: "SAP",
    description: `Currently interning at SAP as a Full Stack Developer on an AI-focused team. Contributing to the development of a computer vision-enabled web application that supports quality assurance in the supply chain industry.`,
    technologies: ["HTML/CSS", "JavaScript", "Python", "C#"],
  },
];

export const PROJECTS = [
  {
    title: "ColdStorage:GO",
    image: ProjectCSGO,
    description:
      "Collaborated on ColdStorage:GO, a web platform for ordering ready-to-cook mealkits online. Contributed to the core order flow system and implemented the user rewards feature to enhance engagement.",
    technologies: ["C#", "React", ".NET", "JavaScript"],
  },
  {
    title: "ASP.NET Authentication Project",
    image: ProjectDotnet,
    description:
      "Created a secure authentication and authorization system using ASP.NET as part of an application security module. Gained hands-on experience implementing login workflows, access control, and secure user management.",
    technologies: ["C#", ".NET"],
  },
  {
    title: "Rentral",
    image: ProjectRentral,
    description:
      "Developed Rentral, a community-focused rental web app that encourages sustainability by allowing users to share and borrow items easily. Emphasized usability and security in the design and development process.",
    technologies: ["Python", "JavaScript", "Express.js", "TailwindCSS", "MySQL"],
  },
  {
    title: "Marks & Spencers Green",
    image: ProjectMS,
    description:
      "Built a complete e-commerce platform for a sustainability-focused retail initiative. Designed and developed features to improve customer experience and streamline digital sales for a traditional business.",
    technologies: ["Flask", "Python", "HTML/CSS", "JavaScript", "MySQL"],
  },
  {
    title: "First Portfolio Website",
    image: ProjectPortfolio,
    description:
      "My initial personal portfolio showcasing projects, technical skills, and contact details. Served as a foundational step in my web development journey.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
];

export const CONTACT = {
  phoneNo: "+65 86068229",
  email: "zhiyang111704@gmail.com",
};
