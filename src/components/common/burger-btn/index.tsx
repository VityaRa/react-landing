import { Hamburger } from "../../../assets/icons/hamburger"
import { StyledButton } from "./styled"
import './styles.css'

interface IProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}

export const BurgerButton = ({ open, setOpen }: IProps) => {
    return (
        <StyledButton className={`${open ? "opened" : ""}`} onClick={() => setOpen(!open)}>
            <Hamburger />
        </StyledButton>
    )
}
