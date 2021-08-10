import { ILink } from "../types/interfaces";
import { pages } from "./data";

export const LINKS = pages.map(page => (
    {
        name: page.title,
        ref: page.route,
    }
))