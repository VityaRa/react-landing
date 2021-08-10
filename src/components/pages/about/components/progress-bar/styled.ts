import styled from "styled-components";

import { darkMainColor  , white } from "../../../../../styles/colors";

interface ICircle {
    active: boolean
}

export const StyledCircle = styled.div`
    position: relative;
    z-index: 5;
    min-width: 30px;
    min-height: 30px;    
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props: ICircle) => props.active ? darkMainColor : white};
    color: ${(props: ICircle) => props.active ? white : darkMainColor};
`

export const StyledLine = styled.div`
    position: relative;
    z-index: 4;
    min-width: 10vw;
    max-width: 15vw;
    width: 100%;
    height: 6px;

    background-color: ${(props: ICircle) => props.active ? darkMainColor : white};
`


export const StyledWrapper = styled.div`
    margin-top: 10vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`