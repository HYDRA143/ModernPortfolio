import { PROFILE_URL } from "../constants/profile";

const message = (id, defaultMessage) => ({ id, defaultMessage });

const TECH_ICONS = {
  html: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  css: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  js: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  jquery:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  solidity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  sequelize:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  tailwind:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
};

const techIcons = (...keys) => keys.map((key) => TECH_ICONS[key]);

export const homeFeaturedProjects = [
  {
    id: "mobicure-1",
    image: "projects/mobicure.png",
    title: "Mobicure",
    description: "Cybersecurity platform for AI deepfake threat detection",
    technologies: ["Python", "React", "TensorFlow", "NodeJS"],
    demoUrl: "https://ty-project-final.onrender.com/",
    repoUrl: PROFILE_URL,
  },
  {
    id: "portfolio-2",
    image: "projects/neeraj-portfolio-new.png",
    title: "CODEAURDESIGN Portfolio",
    description: "Premium developer portfolio with precision engineering",
    technologies: ["React", "GSAP", "Framer Motion", "Tailwind"],
    demoUrl: "https://neerajcodeaurdesign.netlify.app",
    repoUrl: PROFILE_URL,
  },
  {
    id: "suraj-3",
    image: "projects/suraj-portfolio.png",
    title: "Suraj Patil Portfolio",
    description: "Frontend & Full Stack developer personal website",
    technologies: ["Next.js", "React", "Frontend", "Full Stack"],
    demoUrl: "https://surajcyd.netlify.app/",
    repoUrl: PROFILE_URL,
  },
  {
    id: "aura-4",
    image: "projects/project-mobile-app.jpg",
    title: "Aura Native App",
    description: "Cross-platform wellness app with 50K+ downloads",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
  {
    id: "commerce-5",
    image: "projects/project-commerce-plus.jpg",
    title: "Commerce Plus",
    description: "Full-featured e-commerce platform with analytics",
    technologies: ["Next.js", "Shopify", "Stripe", "MongoDB"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
];

export const webProjects = [
  {
    id: "mobicure-web",
    thumbnail: "projects/mobicure.png",
    previewImage: "projects/mobicure.png",
    body: [
      message(
        "projects-mobicure-p1",
        "Mobicure: A state-of-the-art cybersecurity command center designed for enterprise-grade threat detection.",
      ),
      message(
        "projects-mobicure-p2",
        "Engineered with AI-driven deepfake analysis and real-time malware scanning, providing a sub-second response layer for digital infrastructure.",
      ),
    ],
    linkUrl: "https://ty-project-final.onrender.com/",
    techIconUrls: techIcons("react", "nodejs", "mongodb", "tailwind"),
  },
  {
    id: "portfolio-web",
    thumbnail: "projects/neeraj-portfolio-new.png",
    previewImage: "projects/neeraj-portfolio-new.png",
    body: [
      message(
        "projects-portfolio-p1",
        "CODEAURDESIGN Official Portfolio: A precision-engineered digital experience showcasing high-end full-stack capabilities.",
      ),
      message(
        "projects-portfolio-p2",
        "Featuring global smooth scrolling, advanced GSAP layout transitions, and optimized asset loading for a seamless user journey.",
      ),
    ],
    linkUrl: "https://neerajcodeaurdesign.netlify.app",
    techIconUrls: techIcons("react", "js", "tailwind", "sass"),
  },
  {
    id: "suraj-web",
    thumbnail: "projects/suraj-portfolio.png",
    previewImage: "projects/suraj-portfolio.png",
    body: [
      message(
        "projects-suraj-p1",
        "Suraj Patil Professional Hub: A high-performance personal portfolio focused on frontend excellence and UX research.",
      ),
      message(
        "projects-suraj-p2",
        "Built with Next.js for server-side optimization and features a refined design system that prioritizes clarity and speed.",
      ),
    ],
    linkUrl: "https://surajcyd.netlify.app/",
    techIconUrls: techIcons("react", "js", "bootstrap", "css"),
  },
];

export const appProjects = [
  {
    id: "aura-app",
    thumbnail: "projects/project-mobile-app.jpg",
    previewImage: "projects/project-mobile-app.jpg",
    body: [
      "Healthcare app",
      message(
        "projects-aura-p1",
        "Aura is a flagship cross-platform wellness application optimized for both iOS and Android. It delivers a serene user experience through high-performance animations and offline-first data sync.",
      ),
      message(
        "projects-aura-p2",
        "Engineered with React Native and Expo, the app features specialized modules for biometric tracking, guided meditation, and secure cloud storage.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("react", "redux", "nodejs", "mongodb"),
  },
  {
    id: "commerce-app",
    thumbnail: "projects/project-commerce-plus.jpg",
    previewImage: "projects/project-commerce-plus.jpg",
    body: [
      "Commerce Plus Dashboard",
      message(
        "projects-commerce-p1",
        "A comprehensive enterprise e-commerce orchestration layer designed for high-volume retailers.",
      ),
      message(
        "projects-commerce-p2",
        "Optimized for conversion, this platform integrates real-time inventory management, global payment gateways, and advanced customer analytics.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("react", "typescript", "nodejs", "postgresql"),
  },
];

export const gameProjects = [
  {
    id: "quantum-chess",
    thumbnail: "projects/game/project-game-3.jpg",
    previewImage: "projects/game/project-game-3.jpg",
    body: [
      message("projects-game-chess-p1", "Quantum Chess Engine"),
      message(
        "projects-game-chess-p2",
        "A high-logic chess simulation featuring advanced move validation and an interactive UI for competitive play.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("js", "react", "css"),
  },
  {
    id: "neon-memorama",
    thumbnail: "projects/game/project-game-4.jpg",
    previewImage: "projects/game/project-game-4.jpg",
    body: [
      "Neon Memorama",
      message(
        "projects-game-memo-p2",
        "An optimized cognitive training game focusing on visual memory, featuring smooth CSS transitions and state-based logic.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "react"),
  },
];
