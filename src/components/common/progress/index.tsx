import { getColor } from "../../../utils/getColor"
import { StyledContainer, StyledFill, StyledLine, StyledText, StyledTextWrapper } from "./styled"

interface IProps {
    value: number,
    name: string,
}

export const Progress = ({ value, name }: IProps) => {
    return (
        <StyledContainer>
            <StyledTextWrapper>
                <StyledText>{name}</StyledText>
                <StyledText>{value + '%'}</StyledText>
            </StyledTextWrapper>
            <StyledLine>
                <StyledFill style={{width: `${value}%`, backgroundColor: getColor(value)}}>
                </StyledFill>
            </StyledLine>
        </StyledContainer>
    )
}
