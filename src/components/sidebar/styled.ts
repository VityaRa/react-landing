import styled from "styled-components";

interface IProps {
    open: boolean
}

export const StyledWrapper = styled.aside`
    position: absolute;
    min-width: 200px;
    max-width: 330px;
    width: 100%;
    height: 100vh;
    visibility: ${(props: IProps) => !props.open ? `hidden` : `visible`};
    transform: ${(props: IProps) => !props.open ? `translateX(100%)` : `translateX(0)`};
    background: linear-gradient(180deg,#020024 0%,#012d36 100%);
    top: 0;
    right: 0;
    z-index: 9999;
    padding: 100px 0 0px;
`
