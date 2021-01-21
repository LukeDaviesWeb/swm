import React from 'react'
import { StyledArticle } from './styled'

export const Article = ({ data, isLoading, error, ...props }) => {

    if (!isLoading) {
        console.log(data.blocks);
    }
    return (
        <StyledArticle>
            <h1>article here</h1>
        </StyledArticle>
    )
}