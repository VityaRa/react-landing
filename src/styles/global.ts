import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Roboto";
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: #000;
        transition: all .4s ease-out;
    }
    img {
        height: 100%;
    }
    :active, :focus, :hover {
        outline: 0;
        outline-offset: 0;
    }
`