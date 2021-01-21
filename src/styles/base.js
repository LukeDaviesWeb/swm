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
    }

    .container{
        margin: 0 auto;
        max-width: 1250px;
    }

    .label{
        font-size: ${props => theme.fontSizes.label};
    }

    .small{
        font-size: ${props => theme.fontSizes.small};
    }

    h1, h2, h3,h4,h5,h6{
        margin: 0;
        font-weight: normal;
    }

    
    h1, .h1{
        font-size: ${props => theme.fontSizes.h1};
        line-height: 1;
    }
    h2, .h2{
        font-size: ${props => theme.fontSizes.h2};
    }
    h3, .h3{
        font-size: ${props => theme.fontSizes.h3};
    }

    p{
        font-size: ${props => theme.fontSizes.body};
        margin: 0;
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

    .component-container{
        max-width: 80%;
        margin: 0 auto;

        ${(props) => theme.mediaQueries.md} {
            max-width: 75%;
        }
    }
`


