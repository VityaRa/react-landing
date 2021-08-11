import { About } from "../components/pages/about"
import { Links } from "../components/pages/links"
import { Projects } from "../components/pages/projects"
import { Skills } from "../components/pages/skills"

import { VK, LinkedIn, Github, Instagram, Youtube } from "../assets/icons/icons"

import { IPage, IProject, ISkill, ISocialLink } from "../types/interfaces"

export const pages: IPage[] = [
    {
        route: "/about",
        title: "About",
        Component: About,
    },
    {
        route: "/skills",
        title: "Skills",
        Component: Skills,
    },
    {
        route: "/projects",
        title: "Projects",
        Component: Projects,
    },
    {
        title: "Links",
        route: "/links",
        Component: Links,
    }
]

export const aboutInfo: string[] = [
    `Hey! I'm Victor Lobanov, React Developer!`,
    `2`,
    `I'm Victor Lobanov, React Developer`,
]

export const links: ISocialLink[] = [
    {
        ref: "https://vk.com/vityarka",
        Icon: VK
    },
    {
        ref: "https://www.linkedin.com/in/vityarka-lobanov-5446801bb/",
        Icon: LinkedIn
    },
    {
        ref: "https://github.com/VityaRa",
        Icon: Github
    },
    {
        ref: "https://www.instagram.com/vitta.ra/",
        Icon: Instagram
    },
    {
        ref: "https://www.youtube.com/channel/UCHf0PFTZUiV9qTgK-2J3ujQ",
        Icon: Youtube
    },
]

export const projects: IProject[] = [
    {
        ref: "https://vityarka-online-zoo.netlify.app",
        image: "/image/RSS-online-zoo.jpg",
        description: "Multi-page site with many styles and JS",
        rating: 3,
    },
    {
        ref: "https://vicorp-kina.netlify.app",
        image: "/image/kina.jpg",
        description: "My pet project for practice JS",
        rating: 4,
    },
    {
        ref: "https://rolling-scopes-school.github.io/vityara-JSFE2021Q1/match-match/",
        image: "/image/match-match.JPG",
        description: "Match-match game project with TS and ES6 classes",
        rating: 2,
    },
    {
        ref: "https://vityarka-english-for-kids.netlify.app",
        image: "/image/efk.JPG",
        description: "React/Redux/TS project for learning english",
        rating: 1,
    },
    {
        ref: "https://vityarka-virtual-piano.netlify.app",
        image: "/image/RSS-virtual-piano.png",
        description: "Virtual piano with vanilla JS",
        rating: 5,
    },
    {
        ref: "https://vityarka-photo-filter.netlify.app",
        image: "/image/RSS-photo-filter.jpg",
        description: "Photo-filter with vanilla JS",
        rating: 6,
    },
    {
        ref: "https://vicorp-react.netlify.app",
        image: "/image/app-velox.JPG",
        description: "React test task for app-velox company",
        rating: 8,
    },
    {
        ref: "https://vicorp-landing-2.netlify.app/",
        image: "/image/krayt-landing.jpg",
        description: "Landing for Krayt company",
        rating: 9,
    },
    {
        ref: "https://vicorp-blitz.netlify.app/",
        image: "/image/blitz-landing.png",
        description: "React landing for Blitz company",
        rating: 10,
    },
    {
        ref: "https://vicorp-about.netlify.app/",
        image: "/image/main-landing.png",
        description: "Old landing",
        rating: 7,
    },
    {
        ref: "https://vityarka-ecwid-task.netlify.app/",
        image: "/image/ecwid.JPG",
        description: "TS/Webpack/SCSS task for ecwid",
        rating: 11,
    },
]

export const skills: ISkill[] = [
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "ReactJS",
        value: 70,
    },
    {
        name: "NextJS",
        value: 20,
    },
    {
        name: "CSS/SCSS",
        value: 90,
    },
    {
        name: "React Native",
        value: 15,
    },
]