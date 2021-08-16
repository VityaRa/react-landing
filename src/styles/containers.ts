import styled from "styled-components";

import { IFlexDirection } from "../types/styled";

//Flex===========================================================
export const Flex = styled.div.attrs((props: IFlexDirection) => ({
    flexDirection: props.direction || `row`
}))`
    display: flex;
    align-items: center;
    flex-direction: ${props => props.flexDirection};
`

export const FlexCenter = styled(Flex)`
    justify-content: center;
`

export const FlexBetween = styled(Flex)`
    justify-content: space-between;
`

export const FlexEnd = styled(Flex)`
    justify-content: flex-end;
`

export const FlexStart = styled(Flex)`
    justify-content: flex-start;
`
//Flex end===========================================================

//Container==================================================

export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const FullContainer = styled(Container)`
    min-height: 100vh;
`

//Container end==================================================

export const IconWrapper = styled.div`
    min-height: 24px;
    min-width: 24px;

    svg {
        width: 100%;
        height: 100%;
    }
`