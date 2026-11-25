import ProjectRentral from "../assets/projects/ProjectRentral.jpg";
import ProjectMS from "../assets/projects/ProjectMS.png";
import ProjectDotnet from "../assets/projects/ProjectDotnet.png";
import ProjectCSGO from "../assets/projects/ProjectCSGO.jpeg";
import ProjectPortfolio from "../assets/projects/ProjectPortfolio.png";
import ProjectDocumentGrounding from "../assets/projects/ProjectDocumentGrounding.jpeg";
import ProjectVisualInspection from "../assets/projects/ProjectVisualInspection.png";

export const HERO_CONTENT = `Aspiring AI Engineer with a foundation in software engineering and hands-on experience developing backend services, APIs, automated testing systems, and cloud-based applications. During my internship at SAP, I contributed to enterprise AI products involving computer vision and retrieval-augmented generation (RAG), working with technologies such as Java, SAP CAP, Python, and Kubernetes. I am interested in building intelligent systems while developing strong foundations in software engineering, system design, and emerging technologies.`;

export const ABOUT_TEXT = `I am a technology enthusiast with a strong interest in artificial intelligence and building practical software solutions. My experience spans backend development, API design, cloud infrastructure, automated testing, and full-stack application development. During my time at SAP, I worked on enterprise AI products, contributing to backend performance optimisation, API testing, and data processing workflows. I believe in building strong technical fundamentals, staying adaptable in a rapidly evolving industry, and continuously learning through hands-on problem solving.`;

export const EXPERIENCES = [
  {
    year: "2022 April - 2026 April",
    role: "Diploma in Information Technology",
    company: "Nanyang Polytechnic",
    description: `Completed a Diploma in Information Technology, developing a foundation across software development, database management, application security, and systems development. Built projects involving web and mobile applications, e-commerce platforms, backend services, and database-driven systems using a range of programming languages and frameworks.`,
    technologies: [
      "Python",
      "JavaScript",
      "C#",
      "Java",
      "React",
      "Node.js",
      "MySQL",
      ".NET",
    ],
  },
  {
    year: "2025 May - 2026 April",
    role: "AI Developer Intern",
    company: "SAP",
    description: `Contributed to two enterprise AI projects across computer vision and retrieval-augmented generation (RAG). Worked on backend microservices, API development and testing, data processing workflows, CI/CD improvements, and performance optimisation. Also contributed to automated testing, dependency security remediation, and technical research into emerging computer vision approaches.`,
    technologies: [
      "Java",
      "SAP CAP",
      "REST APIs",
      "TypeScript",
      "Playwright",
      "Python",
      "Kubernetes",
      "Docker",
      "Azure DevOps",
      "JUnit",
      "SQL",
      "CI/CD",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Document Grounding - RAG Infrastructure",
    image: ProjectDocumentGrounding, 
    description:
      "Contributed to the backend infrastructure of an enterprise RAG system powering AI-assisted consulting workflows. Developed a repository synchronisation workflow to detect file changes across external data sources and trigger document processing pipelines. Implemented semaphore-based concurrency to improve parallel processing, alongside failure handling and retry mechanisms. Reduced processing time by 50% in load testing involving approximately one million files, and achieved a further 20% reduction in staging, where processing across 2,200 tenants decreased from approximately 40 to 32 minutes.",
    technologies: [
      "Java",
      "SAP CAP",
      "REST APIs",
      "Multi-tenancy",
      "Concurrency",
      "Kubernetes",
      "Load Testing",
    ],
  },
  {
    title: "Visual Inspection - Computer Vision Platform",
    image: ProjectVisualInspection, 
    description:
      "Contributed to an enterprise computer vision platform designed to identify product defects and monitor equipment conditions through image-based inspection. Worked on backend microservice improvements, unit testing, CI/CD pipeline refactoring, and dependency security remediation. Took ownership of QA across two sprint cycles, developing automated end-to-end tests for previously manually tested API interactions and achieving 100% coverage of the identified API interactions. Also researched zero-shot object detection and automated annotation approaches using DINOv3, SAM2, and Florence-2.",
    technologies: [
      "Java",
      "Python",
      "Microservices",
      "REST APIs",
      "Playwright",
      "JUnit",
      "CI/CD",
      "Computer Vision",
    ],
  },
  {
    title: "ColdStorage:GO",
    image: ProjectCSGO,
    description:
      "Collaborated on a full-stack e-commerce platform for ordering ready-to-cook meal kits online. Contributed to the core order flow and implemented the customer rewards feature, supporting the overall shopping and checkout experience.",
    technologies: ["C#", "React", ".NET", "JavaScript", "MySQL"],
  },
  {
    title: "Rentral",
    image: ProjectRentral,
    description:
      "Developed a community-focused rental platform that encourages sustainability by allowing users to share and borrow items. Built application features with an emphasis on usability, backend functionality, and secure data management.",
    technologies: ["Python", "JavaScript", "Express.js", "TailwindCSS", "MySQL"],
  },
  {
    title: "Marks & Spencer Green",
    image: ProjectMS,
    description:
      "Developed a sustainability-focused e-commerce platform using Flask and MySQL. Implemented core web application functionality and database-backed features to support the online shopping experience.",
    technologies: ["Flask", "Python", "HTML/CSS", "JavaScript", "MySQL"],
  },
  {
    title: "ASP.NET Authentication Project",
    image: ProjectDotnet,
    description:
      "Developed an authentication and authorisation system using ASP.NET as part of an application security module. Implemented login workflows, access control, and secure user management while exploring core web application security concepts.",
    technologies: ["C#", ".NET"],
  },
  {
    title: "First Portfolio Website",
    image: ProjectPortfolio,
    description:
      "Built my first personal portfolio website to showcase my projects, technical skills, and development journey. Served as an introduction to front-end development and personal web design.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
];
export const CONTACT = {
  phoneNo: "+65 86068229",
  email: "zhiyang111704@gmail.com",
};
