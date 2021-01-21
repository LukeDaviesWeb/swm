import React from 'react'
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { StyledText } from './styled'


export const Text = ({ data, ...props }) => {
    let displayText = data?.text;
    let intentions = data?.intentions;


    const wrapWithEmphasize = (arr, index, length) => {
        arr.splice(index, 0, '<em>');
        arr.splice(index + length, 0, '</em>');

        return arr;
    }

    const wrapWithBold = (arr, index, length) => {
        arr.splice(index, 0, '<b>');
        arr.splice(index + length, 0, '</b>');

        return arr;
    }

    if (intentions.length > 0) {
        let arrayString = data?.text.split(' ');
        intentions.forEach(intent => {
            switch (intent.kind) {
                case 'emphasized':
                    wrapWithEmphasize(arrayString, intent.index, intent.length);
                    break;
                case 'important':
                    wrapWithBold(arrayString, intent.index, intent.length);
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
