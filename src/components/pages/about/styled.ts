import styled from "styled-components";

import { darkMainColor } from "../../../styles/colors"

const buttonSize = "40px"

interface IVisible {
    visible: boolean,
}

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    @media screen and (max-width: 600px) {
        margin: 0 20px;
    }
`

export const StyledItem = styled.div`
    padding: 2vw 3vw;
    font-size: 30px;
    height: 20vw;
    width: 30vw;
    min-height: 300px;

    &:hover {
        box-shadow: 0px 18px 47px 9px rgba(34, 60, 80, 0.2);
    }
    display: ${(props: IVisible) => props.visible ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    cursor: default;
    text-align: left;

    @media screen and (max-width: 900px) {
        font-size: 25px;
        height: auto;
    }

    @media screen and (max-width: 600px) {
        height: unset;
        width: unset;
        font-size: 20px;
        text-align: center;
        min-height: 200px;
        overflow-y: scroll;
    }
`

export const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 4vw;
    &:hover {
        transform: scale(1.1);
    }
`

export const StyledButton = styled.button`
    min-width: ${buttonSize};
    min-height: ${buttonSize};
    max-width: ${buttonSize};
    max-height: ${buttonSize};
    border-radius: 50%;
    cursor: pointer;
    &:hover {
        background-color: ${darkMainColor};
        transform: scale(1.3);
    }
    &:hover svg line {
        stroke: white;
    }
    @media (max-width: 600px) {
        display: none;
    }
`

export const StyledReversedButton = styled(StyledButton)`
    transform: rotate(180deg);
    &:hover {
        background-color: ${darkMainColor};
        transform: scale(1.3) rotate(180deg);
    }
`

export const StyledSlider = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 3vw;
    @media (max-width: 1000px) {
        margin-top: 6vw;
    }
    @media (max-width: 600px) {
        margin: 20px;
    }
`

export const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
