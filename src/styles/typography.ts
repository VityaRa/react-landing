import styled, { css } from "styled-components";

export const Typography = css`
    line-height: 1.2;
`

export const RegularText = styled.p`
    ${Typography}
`

export const Title = styled(RegularText)`
    font-size: 36px;
    ${Typography}
`

export const SubTitle = styled(RegularText)`
    font-size: 20px;
    ${Typography}
`