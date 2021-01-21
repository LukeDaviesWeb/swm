import styled from 'styled-components';

export const StyledHeader = styled.div`
    padding-bottom: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid ${props => props.theme.colors.lightGrey};

    .header{
        &__headline{
            margin-bottom: 10px;
        }
        &__date-wrap{
            svg{
                margin-left: 5px;
            }
        }
    }
`