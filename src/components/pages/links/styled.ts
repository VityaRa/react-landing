import styled from "styled-components";

export const StyledList = styled.div`
    display: flex;
    margin-top: 8vw;
`

export const StyledRef = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    max-height: 200px;
    width: 10vw;
    height: 10vw;
    min-width: 150px;
    min-height: 150px;
    margin-right: 2vw;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        box-shadow: inset 0 0 60px 40px rgba(34, 60, 80, 1);
    }
    svg {
        width: 80%;
        height: 80%;
        fill: white;
    }

    // &:hover {
        //     background-color: white;
        // }
        // &:hover svg{
        //     fill: black;
        // }
`