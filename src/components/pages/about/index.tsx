import { useState } from "react"

import { StyledWrapper, StyledItem, StyledList, StyledButton, StyledSlider } from "./styled"

import ProgressBar from "./components/progress-bar"
import { aboutInfo } from "../../../utils/data"

export const About = () => {

    const [activeId, setActiveId] = useState(0)

    return (
        <StyledWrapper>
            <StyledSlider>
                <StyledButton></StyledButton>
                <StyledList onMouseLeave={() => setActiveId(0)}>
                    {aboutInfo.map((text: string, index: number) => (
                        <StyledItem key={index} onMouseEnter={() => setActiveId(index + 1)}>{text}</StyledItem>
                    ))}
                </StyledList>
                <StyledButton></StyledButton>
            </StyledSlider>

            <ProgressBar activeId={activeId}></ProgressBar>
        </StyledWrapper>
    )
}
