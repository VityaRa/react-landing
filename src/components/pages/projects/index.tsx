import { projects } from "../../../utils/data"
import { ProjectItem } from "./item"
import { StyledWrapper } from "./styled"

export const Projects = () => {
    return (
        <StyledWrapper>
            { projects.map(project => <ProjectItem info={project}/>) }
        </StyledWrapper>
    )
}
