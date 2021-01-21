import React from 'react'
import PropTypes from 'prop-types';

import { StyledImage } from './styled'


export const Image = ({ data, byline, ...props }) => {


    return (
        <StyledImage>
            <div className="component-container">
                <img src={data?.url} alt={data?.captionText} />
                <p>{data?.captionText} <em>Credit: {byline}</em></p>
            </div>

        </StyledImage>
    )
}

Image.propTypes = {
    data: PropTypes.object,
};
