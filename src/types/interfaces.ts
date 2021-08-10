import { ReactElement } from "react-dom/node_modules/@types/react";

export type Ref = string

export type VoidFunction = () => JSX.Element

export interface ILink {
    name: string,
    ref: Ref,
}

export interface IPage {
    route: string,
    title: string,
    Component: VoidFunction;
}

export interface ISocialLink {
    ref: Ref,
    Icon: VoidFunction,
}

export interface IProject {
    ref: string,
    image: string,
    description: string,
    rating: number,
}