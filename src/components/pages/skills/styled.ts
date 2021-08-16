import styled from "styled-components";

export const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: 1fpr 1fr;
    grid-gap: 5vw;
    margin-top: 2vw;
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
`