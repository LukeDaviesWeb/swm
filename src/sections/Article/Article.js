import React from 'react'
import PropTypes from 'prop-types';

import { Header } from '../../components/Header'
import { Content } from '../../components/Content'

import { StyledArticle } from './styled'

export const Article = ({ data, isLoading, isError, ...props }) => {

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>An Error has occured... please try again.</p>

    return (
        <StyledArticle>
            <Header
                headline={data?.headline}
                byline={data?.byline}
                publicationDate={data?.publicationDate}
                source={data?.source}
            />

            <Content data={data} />
        </StyledArticle>
    )
}

Article.propTypes = {
    data: PropTypes.object,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
};
