import { createGlobalStyle } from 'styled-components'
import { lightMainColor, darkMainColor } from './colors'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        color: #fff;
        transition: all .4s ease-out;
        text-decoration: none;
    }
    img {
        height: 100%;
    }
    :active, :focus, :hover {
        outline: 0;
        outline-offset: 0;
    }
    body {
        font-family: Montserrat;
        background: linear-gradient(0deg, ${lightMainColor} 0%, ${darkMainColor} 100%);
    }
`