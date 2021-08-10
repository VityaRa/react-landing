import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;
`

export const StyledItem = styled.div`
    padding: 2vw 0;
    font-size: 30px;
    width: 33%;
    &:hover {
        box-shadow: 0px 18px 47px 9px rgba(34, 60, 80, 0.2);
    }
`

export const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledButton = styled.button`
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
`

export const StyledSlider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
