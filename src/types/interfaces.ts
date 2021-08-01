import { ReactElement } from "react-dom/node_modules/@types/react";

export type Ref = string

export interface ILink {
    name: string,
    ref: Ref,
}

export interface IPage {
    route: string,
    title: string,
    component: ReactElement;
}