import { About } from "../components/pages/about"
import { Links } from "../components/pages/links"
import { Projects } from "../components/pages/projects"
import { Skills } from "../components/pages/skills"

import { VK, LinkedIn, Github, Instagram, Youtube } from "../assets/icons/icons"

import { IPage, IProject, ISocialLink } from "../types/interfaces"

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
    `Hi! I'm Victor Lobanov, ReactJS Developer`,
    `I'm Victor Lobanov, React Developer`,
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
        ref: "https://rolling-scopes-school.github.io/vityara-JSFE2021Q1/online-zoo/",
        image: "/image/RSS-online-zoo.jpg",
        description: "Multi-page site with many styles and JS",
    },
    {
        ref: "https://vicorp-kina.netlify.app",
        image: "/image/kina.jpg",
        description: "My pet project for practice JS",
    }, 
    {
        ref: "https://rolling-scopes-school.github.io/vityara-JSFE2021Q1/match-match/",
        image: "/image/match-match.JPG",
        description: "Match-match game project with TS and ES6 classes",
    }, 
    // {
    //     ref: "https://vicorp-react.netlify.app/",
    //     image: "/image/match-match.JPG",
    //     description: "SOME TEXT",
    // }, 
    // {
    //     ref: "",
    //     image: "/image/RSS-online-zoo.jpg",
    //     description: "SOME TEXT",
    // }, 
    // {
    //     ref: "",
    //     image: "/image/RSS-photo-filter.jpg",
    //     description: "SOME TEXT",
    // }, 
    // {
    //     ref: "",
    //     image: "/image/RSS-virtual-piano.JPG",
    //     description: "SOME TEXT",
    // }, 
    // {
    //     ref: "",
    //     image: "/image/wildlife.JPG",
    //     description: "SOME TEXT",
    // }, 
]