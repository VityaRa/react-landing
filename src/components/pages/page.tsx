import { IPage } from "../../types/interfaces"
import { StyledContainer, StyledTitle, StyledContent } from "./styled"

type IProps = Omit<IPage, "route">

export const Page = ({ title, Component }: IProps) => {
    return (
        <StyledContainer>
            <StyledTitle as="h2">{title}</StyledTitle>
            <StyledContent>
                <Component></Component>
            </StyledContent>
        </StyledContainer>
    )
}
