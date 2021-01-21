import { ThemeProvider } from 'styled-components'

import { Article } from './sections/Article'
import { Aside } from './sections/Aside'
import { WithData } from './with/WithData'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/base'

import styled from 'styled-components'

const StyledAppWrap = styled.div`
    border: 1px solid ${props => props.theme.colors.grey};
    display: grid;
    grid-template-columns: 100%;
    gap: 2.1rem;
    padding: 0 1rem;

    ${(props) => props.theme.mediaQueries.md} {
        grid-template-columns: minmax(0px, 1fr) 30rem;
        padding: 0;
    }
`


function App() {

    const ArticleWithData = WithData(Article);

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <div className="App">
                    <StyledAppWrap className="container">
                        <ArticleWithData hey="hehehe" />
                        <Aside />
                    </StyledAppWrap>
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
