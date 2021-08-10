import { VK } from "../../../assets/icons/icons"
import { links } from "../../../utils/data"

import { StyledList, StyledRef } from "./styled"

export const Links = () => {
    return (
        <StyledList>
            {
                links.map(link =>
                    <StyledRef href={link.ref}>
                        {<link.Icon />}
                    </StyledRef>)
            }
        </StyledList>
    )
}
