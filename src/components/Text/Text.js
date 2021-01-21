import React from 'react'
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { StyledText } from './styled'


export const Text = ({ data, ...props }) => {
    let displayText = data?.text;
    let intentions = data?.intentions;

    const wrapWithTags = (arr, index, length, tag) => {
        arr.splice(index, 0, `<${tag}>`);
        arr.splice(index + length, 0, `</${tag}>`);

        return arr;
    }

    if (intentions.length > 0) {
        let arrayString = data?.text.split(' ');
        intentions.forEach(intent => {
            switch (intent.kind) {
                case 'emphasized':
                    wrapWithTags(arrayString, intent.index, intent.length, 'em');
                    break;
                case 'important':
                    wrapWithTags(arrayString, intent.index, intent.length, 'b');
                    break;
                default: return;
            }
        })

        displayText = parse(arrayString.join(' '));
    }


    return (
        <StyledText>
            <p>{displayText}</p>
        </StyledText>
    )
}

Text.propTypes = {
    data: PropTypes.object,
};
