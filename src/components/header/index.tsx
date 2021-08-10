import { Link } from "react-router-dom"

import { FlexBetween } from "../../styles/containers"
import {
    StyledLogoWrapper,
    StyledLogoText,
    StyledLinkWrapper,
    StyledContainer,
    StyledLinkItem
} from "./styled"

import { LINKS } from "../../utils/constants"

const Header = () => {
    
    return (
        <StyledContainer as="header">
            <FlexBetween>
                <StyledLogoWrapper>
                    <StyledLogoText>
                        FRONTEND
                    </StyledLogoText>
                </StyledLogoWrapper>
                <StyledLinkWrapper>
                    {
                        LINKS.map((link, index) => (
                            <StyledLinkItem key={index} to={link.ref}>{link.name}</StyledLinkItem>
                        ))
                    }
                </StyledLinkWrapper>
            </FlexBetween>
        </StyledContainer>
    )
}

export default Header
