import styled from "styled-components";
import { Link } from "react-router-dom"

import { FlexCenter, FlexEnd, Container } from "../../styles/containers";
import { Title } from "../../styles/typography";

export const StyledContainer = styled(Container)`
    padding: 0 2vw;
`

export const StyledLogoWrapper = styled(FlexCenter)`
    width: 30vw;
    padding: 1.25vw;
`

export const StyledLogoText = styled(Title)`
    font-weight: 900;
`
export const StyledLinkWrapper = styled(FlexEnd)`
    height: 100%;
`

export const StyledLinkItem = styled(Link)`
    height: 100%;
    padding: 1.25vw 2vw;
    &:last-child {
        margin-right: 0;
    }
    &:hover {
        background: #fff;
        color: #000;
    }
`