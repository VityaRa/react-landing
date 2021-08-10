import { useState } from "react"
import { IProject } from "../../../../types/interfaces"
import { StyledContainer, StyledInner, StyledImageWrapper, StyledTextWrapper, StyledImage, StyledText, StyledTooltip } from "./styled"

interface IProps {
    info: IProject
}

export const ProjectItem = ({ info }: IProps) => {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <a href={info.ref} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <StyledContainer>
                <StyledInner>
                    <StyledImageWrapper>
                        <StyledImage src={info.image} alt="no" />
                        {isHovered && <StyledTooltip>Посмотреть проект</StyledTooltip>}
                    </StyledImageWrapper>
                    <StyledTextWrapper>
                        <StyledText>
                            {info.description}
                        </StyledText>
                    </StyledTextWrapper>
                </StyledInner>
            </StyledContainer>
        </a>


    )
}
