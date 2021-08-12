import { useEffect, useState } from "react"

import {
    StyledWrapper,
    StyledItem,
    StyledList,
    StyledButton,
    StyledSlider,
    StyledIconWrapper,
    StyledReversedButton
} from "./styled"

import { aboutInfo } from "../../../utils/data"
import { ArrowIcon } from "../../../assets/icons/arrow"

import ProgressBar from "./components/progress-bar"
import { InlineRef } from "../../common/inline-ref"
import { ACTIVE_ID } from "../../../utils/constants"


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

    useEffect(() => {
        const fetched = localStorage.getItem(ACTIVE_ID)
        if (fetched) {
            setActiveId(+fetched)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(ACTIVE_ID, activeId + '')
    }, [activeId])

    return (
        <StyledWrapper>
            <StyledSlider>
                <StyledReversedButton onClick={decrement}>
                    <StyledIconWrapper><ArrowIcon /></StyledIconWrapper>
                </StyledReversedButton>
                <StyledList >
                    {aboutInfo.map((text: string, index: number) => (
                        <StyledItem visible={index === activeId} key={index}>
                            {text.includes('/') ? <InlineRef text={text} /> : text}
                        </StyledItem>
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
