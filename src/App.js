import { ThemeProvider } from 'styled-components'

import { Article } from './sections/Article'
import { Aside } from './sections/Aside'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/base'

import styled from 'styled-components'

const StyledAppWrap = styled.div`
    border: 1px solid ${props => props.theme.colors.grey};
    display: grid;
    grid-template-columns: minmax(0px, 1fr) 30rem;
    gap: 2.1rem;
`

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <div className="App">

                    <StyledAppWrap className="container">
                        <Article />
                        <Aside />
                    </StyledAppWrap>

                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
