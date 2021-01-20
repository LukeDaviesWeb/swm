import styled from 'styled-components'

export const StyledArticle = styled.div`
    border: 1px solid;

    ${(props) => props.theme.mediaQueries.md} {
        padding: 2rem;
    }
`