import { useState } from "react"

import { StyledWrapper, StyledItem, StyledList, StyledButton, StyledSlider, StyledIconWrapper } from "./styled"

import ProgressBar from "./components/progress-bar"
import { aboutInfo } from "../../../utils/data"
import { ArrowIcon } from "../../../assets/icons/arrow"


export const About = () => {

    const [activeId, setActiveId] = useState<number>(0)


    const increment = () => {
        if (activeId + 1 >= aboutInfo.length) setActiveId(0)
        else setActiveId(prev => ++prev)
    }

    const decrement = () => {
        if (activeId - 1 < 0) setActiveId(aboutInfo.length - 1)
        else setActiveId(prev => --prev)
    }

    return (
        <StyledWrapper>
            <StyledSlider>
                <StyledButton onClick={decrement}>
                    <StyledIconWrapper><ArrowIcon /></StyledIconWrapper>
                </StyledButton>
                <StyledList >
                    {aboutInfo.map((text: string, index: number) => (
                        <StyledItem visible={index === activeId} key={index}>{text}</StyledItem>
                    ))}
                </StyledList>
                <StyledButton onClick={increment}>
                    <StyledIconWrapper><ArrowIcon /></StyledIconWrapper>
                </StyledButton>
            </StyledSlider>
            <ProgressBar activeId={activeId}></ProgressBar>
        </StyledWrapper>
    )
}
