import styled from "styled-components";

interface IVisible {
    visible: boolean,
}

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const StyledItem = styled.div`
    padding: 2vw 0;
    font-size: 30px;
    height: 20vw;
    width: 30vw;
    &:hover {
        box-shadow: 0px 18px 47px 9px rgba(34, 60, 80, 0.2);
    }
    display: ${(props: IVisible) => props.visible ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`

export const StyledList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const StyledButton = styled.button`
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
    cursor: pointer;
`

export const StyledSlider = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const StyledIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 100%;
        height: 100%;
    }
`
