import { useEffect } from "react";

import { StyledCircle, StyledWrapper, StyledLine, StyledContainer } from "./styled"

import { aboutInfo } from "../../../../../utils/data";

interface IProps {
    activeId: number,
    setActiveId: React.Dispatch<React.SetStateAction<number>>,
}

const ProgressBar = ({ activeId, setActiveId }: IProps) => {
    return (
        <StyledWrapper>
            {aboutInfo.map((text: string, index: number) => (<StyledContainer key={index}>
                <StyledCircle onClick={() => setActiveId(index)} current={index === activeId} active={activeId >= index}>{index + 1}</StyledCircle>
                {index + 1 === aboutInfo.length ? "" : (<StyledLine active={activeId >= index + 1}></StyledLine>)}
            </StyledContainer>
            ))}
        </StyledWrapper>
    )
}

export default ProgressBar
