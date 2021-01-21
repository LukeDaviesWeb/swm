import React from 'react'
import PropTypes from 'prop-types';

import { StyledPullQuote } from './styled'

export const PullQuote = ({ data }) => {
    return (
        <StyledPullQuote>
            <div className="PullQuote__container component-container">
                <h2 className="PullQuote__quote" ><em>{data?.text}</em></h2>
                <p className="small">{data?.attribution}</p>
            </div>
        </StyledPullQuote>
    )
}

Image.propTypes = {
    data: PropTypes.object,
};