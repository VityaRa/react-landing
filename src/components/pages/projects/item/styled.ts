import styled from "styled-components";
import { black, lightMainColor, white } from "../../../../styles/colors";

const borderValue = "8px";


export const StyledInner = styled.div`
    padding: 1.25vw;
    height: 100%;
`
export const StyledImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    height: 15vw;
    border-top-left-radius: ${borderValue};
    border-top-right-radius: ${borderValue};
    overflow: hidden;

    
    @media screen and (max-width: 600px) {
        height: 40vw;
    }
`
export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    min-height: 15vw;
    object-fit: fill;
`

export const StyledTextWrapper = styled.div`
    padding: 20px;
    background-color: rgba(255,255,255, 0.3);
    border-bottom-left-radius: ${borderValue};
    border-bottom-right-radius: ${borderValue};
    box-shadow: inset 0px 15px 29px 18px  rgba(34, 60, 80, 0.2);

    @media screen and (max-width: 600px) {
        padding: 3vw;
    }
`


export const StyledText = styled.p`
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    min-height: 40px;
`

export const StyledContainer = styled.div`
    min-width: 30vw;
    min-height: 20vw;
    border-radius: ${borderValue};
    overflow: hidden;
    cursor: pointer;
    &:hover {
        background-color: rgba(255,255,255, 0.3);
    }
    &:hover ${StyledTextWrapper} {
        background-color: ${white};
    }
    &:hover ${StyledText} {
        color: ${black};
    }
    &:hover ${StyledImage} {
        transform: scale(1.2);
        filter: blur(2px)
                brightness(50%);
    }

    @media screen and (max-width: 600px) {
        height: 60vw;
    }
`

export const StyledTooltip = styled.div`
    position: absolute;
    color: ${white};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0;
    font-size: 30px;
    font-weight: 600;
`