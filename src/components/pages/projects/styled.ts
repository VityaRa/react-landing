import styled from "styled-components";

export const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1vw;
    margin: 0 3vw;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        row-gap: 3vw;
    }
`