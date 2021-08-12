import { Link } from "react-router-dom"
import { StyledLink } from "./styled"

interface IProps {
    text: string
}

export const InlineRef = ({text}: IProps) => {
    
    return (
        <p>
            {text.split('/').map((part, index) => {
                if (part === "skills" || part === "projects" || part === "links") {
                    return <StyledLink key={index} to={part}>{part}</StyledLink>
                }
                return <span key={index}>{part}</span>;
            })}
        </p>
    )
}
