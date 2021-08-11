import { useEffect, useState } from "react"
import { IPage } from "../../types/interfaces"
import { StyledContainer, StyledTitle, StyledContent } from "./styled"

type IProps = Omit<IPage, "route">

export const Page = ({ title, Component }: IProps) => {
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setOpacity(prev => prev + 0.2)
        }, 1)
        setTimeout(() => {
            clearInterval(interval)
        }, 200)
        setTimeout(() => {
            setOpacity(1)
        }, 200)
    }, [])

    return (
        <div style={{opacity: opacity}}>
            <StyledContainer>
                <StyledTitle as="h2">{title}</StyledTitle>
                <StyledContent>
                    <Component></Component>
                </StyledContent>
            </StyledContainer>
        </div>

    )
}
