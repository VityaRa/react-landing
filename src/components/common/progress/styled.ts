import styled from "styled-components";

const lineHeight = `1vw`
const minLineHeight = `10px`
const mobileLineHeight = `15px`

export const StyledContainer = styled.div`
    position: relative;
    margin-top: 5px;
`

export const StyledTextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3vw;
`


export const StyledText = styled.p`
    text-align: left;
    font-size: 22px;
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

export const StyledLine = styled.div`
    position: relative;
    min-height: ${minLineHeight};
    height: ${lineHeight};
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    @media (max-width: 600px) {
        height: ${mobileLineHeight};
        min-height: ${mobileLineHeight};
    }
`

export const StyledFill = styled.div`
    position: absolute;
    background-color: #000;
    height: ${lineHeight};
    min-height: ${minLineHeight};
    @media (max-width: 600px) {
        width: 170px;
        height: ${mobileLineHeight};
        min-height: ${mobileLineHeight};
    }
`