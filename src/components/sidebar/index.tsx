import { IOpen } from "../../types/interfaces"
import { navLinks } from "../../utils/data"
import { StyledLinkItem, StyledLinkWrapper } from "../header/styled"
import { StyledWrapper } from "./styled"


const Sidebar = ({ open, setOpen }: IOpen) => {
    return (
        <StyledWrapper open={open}>
            <StyledLinkWrapper>
                {
                    navLinks.map((link, index) => (
                        <StyledLinkItem onClick={() => setOpen(!open)} key={index} to={link.ref}>{link.name}</StyledLinkItem>
                    ))
                }
            </StyledLinkWrapper>
        </StyledWrapper>
    )
}

export default Sidebar
