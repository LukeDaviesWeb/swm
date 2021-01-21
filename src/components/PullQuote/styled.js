import styled from 'styled-components'

export const StyledPullQuote = styled.div`
    padding: 20px 0 40px 0;
    
    .PullQuote{
        &__container{
            border-left: 5px solid ${props => props.theme.colors.blue};
            padding-left: 20px;
        }

        &__quote{
            font-weight: normal;
            margin-bottom: 5px;
        }
    }
`