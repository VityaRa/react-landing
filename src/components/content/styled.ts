import styled from "styled-components"

import { Container, FlexCenter } from "../../styles/containers"

export const StyledContainer = styled(Container)`
`
export const StyledWrapper = styled(FlexCenter)`
    width: 100%;
    @media (max-width: 600px) {
        display: block;
    }
`