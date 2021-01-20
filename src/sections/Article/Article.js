import React from 'react'
import { StyledArticle } from './styled'

export const Article = ({ data, load, error, ...props }) => {

    return (
        <StyledArticle>
            <h1>article here</h1>
        </StyledArticle>
    )
}