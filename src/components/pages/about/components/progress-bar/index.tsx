import { useEffect } from "react";

import { StyledCircle, StyledWrapper, StyledLine } from "./styled"

import { aboutInfo } from "../../../../../utils/data";

interface IProps {
    activeId: number,
}

const ProgressBar = ({ activeId }: IProps) => {
    return (
        <StyledWrapper>
            {aboutInfo.map((text: string, index: number) => (<>
                <StyledCircle active={activeId >= index + 1}>{index + 1}</StyledCircle>
                {index + 1 === aboutInfo.length ? "" : (<StyledLine active={activeId >= index + 2}></StyledLine>)}
            </>
            ))}
        </StyledWrapper>
    )
}

export default ProgressBar
