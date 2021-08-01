import { IPage } from "../../types/interfaces"

type IProps = Omit<IPage, "route">

export const Page = ({ title, component }: IProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <div>
                {component}
            </div>
        </section>
    )
}
