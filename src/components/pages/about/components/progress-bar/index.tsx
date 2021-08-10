import { useEffect } from "react";

import { StyledCircle, StyledWrapper, StyledLine, StyledContainer } from "./styled"

import { aboutInfo } from "../../../../../utils/data";

interface IProps {
    activeId: number,
}

const ProgressBar = ({ activeId }: IProps) => {
    return (
        <StyledWrapper>
            {aboutInfo.map((text: string, index: number) => (<StyledContainer key={index}>
                <StyledCircle active={activeId >= index + 1}>{index + 1}</StyledCircle>
                {index + 1 === aboutInfo.length ? "" : (<StyledLine active={activeId >= index + 2}></StyledLine>)}
            </StyledContainer>
            ))}
        </StyledWrapper>
    )
}

export default ProgressBar
