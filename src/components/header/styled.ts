import styled from "styled-components";
import { Link } from "react-router-dom"

import { FlexCenter, FlexEnd, Container } from "../../styles/containers";
import { Title } from "../../styles/typography";

export const StyledContainer = styled.div`
    padding: 0 2vw;
    width: 100%;
`

export const StyledLogoWrapper = styled(FlexCenter)`
    padding: 1.25vw;
`

export const StyledLogoText = styled(Title)`
    font-weight: 900;
    font-size: 20px;

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
        color: rgba(2,0,36,1);
    }
`