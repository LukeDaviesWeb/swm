import React from 'react'
import PropTypes from 'prop-types';

import { Text } from '../Text'
import { Image } from '../Image'
import { PullQuote } from '../PullQuote'

import { StyledContent } from './Styled'


export const Content = ({ data }) => {

    //ADD KEY TO MAP
    return (
        <StyledContent>
            {   data.blocks?.map(componentData => {
                switch (componentData.kind) {
                    case 'text':
                        return (
                            <Text data={componentData} />
                        )
                    case 'image':
                        return (
                            <Image data={componentData} byline={data.byline} />
                        )
                    case 'pull-quote':
                        return (
                            <PullQuote data={componentData} />
                        )
                    default:
                        return (
                            <p>no component for this data type {componentData.kind}</p>
                        )
                }
            })}
        </StyledContent>
    )
}

Content.propTypes = {
    data: PropTypes.object,
};
