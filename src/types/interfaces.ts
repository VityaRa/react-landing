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

export interface ISkill {
    value: number,
    name: string,
}

export interface IOpen {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}