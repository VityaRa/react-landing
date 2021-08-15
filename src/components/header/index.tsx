import { Link } from "react-router-dom"

import { FlexBetween } from "../../styles/containers"
import {
    StyledLogoWrapper,
    StyledLogoText,
    StyledLinkWrapper,
    StyledContainer,
    StyledLinkItem
} from "./styled"

import { navLinks } from "../../utils/data"

import useResolution from "../../hooks/useResolution"

const Header = () => {
    const isMobile = useResolution()

    return (
        <StyledContainer as="header">
            <FlexBetween>
                <StyledLogoWrapper>
                    <StyledLogoText>
                        FRONTEND
                    </StyledLogoText>
                </StyledLogoWrapper>
                {
                    !isMobile ? 
                    <StyledLinkWrapper>
                        {
                            navLinks.map((link, index) => (
                                <StyledLinkItem key={index} to={link.ref}>{link.name}</StyledLinkItem>
                            ))
                        }
                    </StyledLinkWrapper> :
                    null
                    // <BurgerButton />
                }

            </FlexBetween>
        </StyledContainer>
    )
}

export default Header
