import styled from "styled-components";

export const StyledList = styled.div`
    display: flex;
    margin-top: 8vw;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
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

    @media screen and (max-width: 600px) {
        min-width: 150px !important;
        min-height: 150px !important;
        margin-right: 0;
    }

    @media screen and (max-width: 1000px) {
        width: 10vw;
        height: 10vw;
        min-width: 100px;
        min-height: 100px;
    }
`