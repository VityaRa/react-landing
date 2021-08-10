import { projects } from "../../../utils/data"
import { ProjectItem } from "./item"
import { StyledWrapper } from "./styled"

export const Projects = () => {
    return (
        <StyledWrapper>
            { projects.sort((a, b) => a.rating - b.rating).map((project, index) => <ProjectItem key={index} info={project}/>) }
        </StyledWrapper>
    )
}
