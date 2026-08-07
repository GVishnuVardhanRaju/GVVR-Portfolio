import projectAlcohol from "@/assets/projectAlcohol.png";
import projectCourier from "@/assets/projectCourier.png";
import projectAnimal from "@/assets/projectAnimal.png";
import projectGs from "@/assets/projectGS.png";
import projectgfa from "@/assets/projectgfa.jpg";
import projectMine from "@/assets/projectmine.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Global Sky Weather App",
    description:
      "Global Sky Weather App is a responsive React-based web application that provides real-time weather data for cities worldwide with an interactive and user-friendly interface.",
    image: projectGs,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://global-sky-weather-app.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/Global-Sky-Weather-App",
  },
  {
    title: "SwiftShip",
    description:
      "A project designed to simplify and streamline the movement of goods. The focus is on speed, reliability, and a seamless experience for anyone sending or receiving packages.",
    image: projectCourier,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://swift-ship-plum.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/SwiftShip",
  },
  {
    title: "Elixir Insight",
    description:
      "A project that explores the health and lifestyle benefits of moderate alcohol consumption. The goal is to educate and inform in a friendly, visually appealing way.",
    image: projectAlcohol,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://elixir-insight.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/Elixir-Insight",
  },
  {
    title: "Huner Industries",
    description:
      "An educational and historical reference archive documenting notable firearms, manufacturers, and their historical development.",
    image: projectgfa,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://huner-industries.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/Huner-Industries",
  },
  {
    title: "Mine Vision",
    description:
      "MineVision AI is a modern enterprise-grade mining intelligence platform designed for commodity traders, mining corporations, investors, analysts, and industry researchers..",
    image: projectMine,
    tech: ["TypeScript", "Tailwind CSS", "React", "JavaScript", "HTML", "CSS"],
    live: "https://mine-vision-gamma.vercel.app/",
    github: "https://github.com/GVishnuVardhanRaju/MineVision",
  },
  {
    title: "The Circle of Animal Dreamland",
    description:
      "The goal of this project is to create a simple and user-friendly platform that connects animals with loving homes.",
    image: projectAnimal,
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    live: "https://youtu.be/6pHMcDQzWqU?si=TAsSuuCIDDlyB2Ma",
    github:
      "https://github.com/GVishnuVardhanRaju/The-Circle-OF-Animal-Dreamland",
  },
];

export default projects;
