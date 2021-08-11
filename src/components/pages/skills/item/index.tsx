import { ISkill } from "../../../../types/interfaces"
import { Progress } from "../../../common/progress"
import { StyledContainer, StyledInner } from "./styled"

interface IProps {
    skill: ISkill,
}

export const SkillItem = ({ skill }: IProps) => {
    return (
        <StyledContainer>
            <StyledInner>
                <Progress value={skill.value} name={skill.name} />
            </StyledInner>
        </StyledContainer>
    )
}
