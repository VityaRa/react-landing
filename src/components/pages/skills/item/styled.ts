import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 20vw;
    
    @media (max-width: 10000px) {
        width: 30vw;
    }
    @media (max-width: 600px) {
        width: 80%;
    }
`

export const StyledInner = styled.div`
    display: flex;
    flex-direction: column;
`