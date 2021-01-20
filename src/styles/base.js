import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
 html {
        box-sizing: border-box;
        font-size: 10px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        box-sizing: border-box;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        font-family: ${props => theme.fonts.body};
        color: ${props => theme.colors.grey};
        overflow-x: hidden;
    }

    .container{
        margin: 0 auto;
        max-width: 1250px;
    }

    h1, h2, h3,h4,h5,h6{
        margin: 0;
    }

    
    h1, .h1{
        font-size: ${props => theme.fontSizes.h1};
    }
    h2, .h2{
        font-size: ${props => theme.fontSizes.h2};
    }
    h3, .h3{
        font-size: ${props => theme.fontSizes.h3};
    }

    p{
        font-size: ${props => theme.fontSizes.body};
    }


    .lead, span.lead{
        font-size: ${props => theme.sizes.lead};
    }

    .label{
        font-size: ${props => theme.sizes.label};
    }

    .small{
        font-size: ${props => theme.sizes.small};
    }

    a{
        text-decoration: none;
        color: ${props => theme.colors.blue};
    }

    ul{
        margin: 0;
        padding: 0;
        li{
            list-style-type: none;
            font-weight: 400;
        }
    }
`


