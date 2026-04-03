import { PROFILE_URL } from "../constants/profile";

const message = (id, defaultMessage) => ({ id, defaultMessage });

const TECH_ICONS = {
  html: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  css: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  js: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
  jquery:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
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
    id: "app-18",
    image: "projects/app/project-app-18-thumb.png",
    title: "CoinPlus",
    description: "Trading platform for cryptocurrencies",
    technologies: ["React", "Redux", "TypeScript", "NodeJS", "MongoDB"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
  {
    id: "web-17",
    image: "projects/web/project-web-17-thumb.jpg",
    title: "TatoFood",
    description: "Fast food ecommerce landing page",
    technologies: ["HTML5", "CSS", "JavaScript", "jQuery"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
  {
    id: "app-17",
    image: "projects/app/project-app-17-thumb.png",
    title: "PI Dogs",
    description: "Single-page app powered by The Dog API",
    technologies: ["React", "Redux", "NodeJS", "PostgreSQL"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
  {
    id: "web-14",
    image: "projects/web/project-web-14-thumb.jpg",
    title: "Justice",
    description: "Website for a law firm",
    technologies: ["HTML5", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
  {
    id: "web-15",
    image: "projects/web/project-web-15-thumb.jpg",
    title: "Magical Effect",
    description: "Portfolio website for a media agency",
    technologies: ["HTML5", "CSS", "JavaScript", "jQuery"],
    demoUrl: PROFILE_URL,
    repoUrl: PROFILE_URL,
  },
];

export const webProjects = [
  {
    id: "web-17",
    thumbnail: "projects/web/project-web-17-thumb.jpg",
    previewImage: "projects/web/project-web-17-preview.png",
    body: [
      message(
        "projects-info-17-p1",
        "TatoFood, page created for the sale of fast food.",
      ),
      message(
        "projects-info-17-p2",
        "Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "jquery"),
  },
  {
    id: "web-14",
    thumbnail: "projects/web/project-web-14-thumb.jpg",
    previewImage: "projects/web/project-web-14-preview.png",
    body: [
      message("projects-info-14-p1", "Justice, page created for law firm."),
      message(
        "projects-info-14-p2",
        "Focused on showing the client the value, experience and professionalism of the lawyers they can hire, choosing the category of their specific case.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "bootstrap", "jquery"),
  },
  {
    id: "web-15",
    thumbnail: "projects/web/project-web-15-thumb.jpg",
    previewImage: "projects/web/project-web-15-preview.png",
    body: [
      message(
        "projects-info-15-p1",
        "Magical Effect is a portfolio created for a video development agency.",
      ),
      message(
        "projects-info-15-p2",
        "It shows the projects carried out over the years for different types of clients, names their services and years of experience in the industry.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "jquery"),
  },
  {
    id: "web-16",
    thumbnail: "projects/web/project-web-16-thumb.jpg",
    previewImage: "projects/web/project-web-16-preview.png",
    body: [
      message(
        "projects-info-16-p1",
        "Crystal Heart Store, is an online clothing store.",
      ),
      message(
        "projects-info-16-p2",
        "Designed so that the customer can search for products in a very fast and easy way, can calculate the shipment and pay online.",
      ),
    ],
    linkUrl: PROFILE_URL,
    linkLabel: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "jquery"),
  },
  {
    id: "web-13",
    thumbnail: "projects/web/project-web-13-thumb.jpg",
    previewImage: "projects/web/project-web-13-preview.png",
    body: [
      message(
        "projects-info-13-p1",
        "Inspired Gamer, page created for the sale of digital and physical video games.",
      ),
      message(
        "projects-info-13-p2",
        "Developed so that the client can choose their console, be it PSP 5 or Xbox X, and be able to browse exclusive pages for each console.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "bootstrap"),
  },
];

export const appProjects = [
  {
    id: "app-18",
    thumbnail: "projects/app/project-app-18-thumb.png",
    previewImage: "projects/app/project-app-18-preview.png",
    body: [
      "CoinPlus",
      message(
        "projectsApp-info-18-p1",
        "An app that offers exchange services for all the cryptocurrencies of the Ethereum network. You can convert dollars into cryptocurrencies, change to others and sell them to be cashed in dollars.",
      ),
      message(
        "projectsApp-info-18-p2",
        "The application has an authentication system, so that the user can access their account and carry out the operations they want, it also has a section where you can see the evolution of the different cryptocurrencies.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons(
      "react",
      "redux",
      "bootstrap",
      "typescript",
      "mongodb",
      "nodejs",
      "solidity",
    ),
    techIconClassName: "eins-modal-tec-2",
  },
  {
    id: "app-17",
    thumbnail: "projects/app/project-app-17-thumb.png",
    previewImage: "projects/app/project-app-17-preview.png",
    body: [
      "PI Dogs",
      message(
        "projectsApp-info-17-p2",
        "This project consisted of the development of a SPA (Single Page Application) which is developed with the neumorphism style, makes use of a data API (The Dog API), and then part of the information is extracted and stored in a Database. of Data, (PostgreSQL) so that it can be used later at convenience.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons(
      "react",
      "css",
      "redux",
      "nodejs",
      "sequelize",
      "postgresql",
    ),
  },
  {
    id: "app-16",
    thumbnail: "projects/app/project-app-16.jpg",
    previewImage: "projects/app/project-app-16.jpg",
    body: [
      "Weather App",
      message(
        "projectsApp-info-16-p2",
        "It allows you to search for the weather of the city you choose, you can delete the city you searched for and also see more details of the city.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "react"),
  },
  {
    id: "app-15",
    thumbnail: "projects/app/project-app-15.jpg",
    previewImage: "projects/app/project-app-15.jpg",
    body: [
      "Stickers App",
      message(
        "projectsApp-info-15-p2",
        "The app extracts data from the giphy API, to search for the stickers that the user wants",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "react"),
  },
  {
    id: "app-14",
    thumbnail: "projects/app/project-app-14.jpg",
    previewImage: "projects/app/project-app-14.jpg",
    body: [
      "Music player",
      message(
        "projectsApp-info-14-p2",
        "Small music player created with javascript, allows you to play, pause, fast forward and skip the songs",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js"),
  },
];

export const gameProjects = [
  {
    id: "game-4",
    thumbnail: "projects/game/project-game-4.jpg",
    previewImage: "projects/game/project-game-4.jpg",
    body: [
      "Memorama",
      message(
        "projectsGame-info-4-p2",
        "You must guess the 2 pairs of cards in the shortest time and with fewer clicks.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "react"),
  },
  {
    id: "game-3",
    thumbnail: "projects/game/project-game-3.jpg",
    previewImage: "projects/game/project-game-3.jpg",
    body: [
      message("projectsGame-info-3-p1", "Chess game"),
      message(
        "projectsGame-info-3-p2",
        "A chess game that allowed me to play against another user.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js", "jquery"),
  },
  {
    id: "game-2",
    thumbnail: "projects/game/project-game-2.jpg",
    previewImage: "projects/game/project-game-2.jpg",
    body: [
      message("projectsGame-info-2-p1", "Snake game"),
      message(
        "projectsGame-info-2-p2",
        "Inspired by the classic 90's arcade game.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js"),
  },
  {
    id: "game-1",
    thumbnail: "projects/game/project-game-1.jpg",
    previewImage: "projects/game/project-game-1.jpg",
    body: [
      message("projectsGame-info-1-p1", "Questions and answers"),
      message(
        "projectsGame-info-1-p2",
        "It has more than 400 questions with multiple options to answer.",
      ),
    ],
    linkUrl: PROFILE_URL,
    techIconUrls: techIcons("html", "css", "js"),
  },
];
