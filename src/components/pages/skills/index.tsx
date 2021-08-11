import { skills } from "../../../utils/data"
import { Progress } from "../../common/progress"
import { StyledContainer } from "./styled"
import { SkillItem } from "./item"

export const Skills = () => {
    return (
        <StyledContainer>
            {skills.sort((a, b) => b.value - a.value).map((skill, index) => (
                <SkillItem key={index} skill={skill} />
            ))}
        </StyledContainer>
    )
}
