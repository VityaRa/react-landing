import { About } from "../components/pages/about"
import { Links } from "../components/pages/links"
import { Main } from "../components/pages/main"
import { Projects } from "../components/pages/projects"
import { Skills } from "../components/pages/skills"
import { IPage } from "../types/interfaces"

export const pages: IPage[] = [
    {
        route: "/",
        title: "React Developer",
        component: Main(),
    },
    {
        route: "/about",
        title: "About",
        component: About(),
        
    },
    {
        route: "/skills",
        title: "Skills",
        component: Skills(),
    },
    {
        route: "/projects",
        title: "Projects",
        component: Projects(),
    },
    {
        title: "Links",
        route: "/links",
        component: Links(),
    }
]