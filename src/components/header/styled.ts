import styled from "styled-components";
import { Link } from "react-router-dom"

import { FlexCenter, FlexStart } from "../../styles/containers";
import { Title } from "../../styles/typography";

export const StyledContainer = styled.div`
    padding: 0 2vw;
    width: 100%;
    margin-top: 10px;
`

export const StyledLogoWrapper = styled(FlexCenter)`
    padding: 1.25vw;
`

export const StyledLogoText = styled(Title)`
    font-weight: 900;
    font-size: 20px;
    @media (max-width: 600px) {
        font-size: 30px;
    }
`

export const StyledLinkWrapper = styled(FlexStart)`
    height: 100%;
    @media (max-width: 600px) {
        flex-direction: column;
    }
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
    @media (max-width: 600px) {
        font-size: 24px;
        width: 100%;
        height: auto;
        text-align: center;
        padding: 20px 2vw;
    }
`