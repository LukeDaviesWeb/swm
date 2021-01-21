import styled from 'styled-components'

export const StyledArticle = styled.div`
    padding: 2rem 0;
    ${(props) => props.theme.mediaQueries.md} {
        padding: 2rem;
    }
`