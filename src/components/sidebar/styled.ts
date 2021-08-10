import styled from "styled-components";

export const StyledWrapper = styled.aside`
    position: absolute;
    min-width: 200px;
    max-width: 300px;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    transform: translateX(-100%);
    background: linear-gradient(#c98572,#e9cec7);
    top: 0;
    left: 0;
    z-index: 999;
    padding: 100px 60px 60px;

    &.active {
        transform: translateX(0);
    }
`