import React from 'react'
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { PlusIcon } from '../../components/Icons'

import { StyledHeader } from './styled'

export const Header = ({ headline, byline, publicationDate, source, ...props }) => {

    return (
        <StyledHeader>
            <h1 className="header__headline">{headline}</h1>

            <div>
                <p className="small" ><b>{byline},</b> <em>{source}</em></p>

                <div className="header__date-wrap small">
                    <Moment format="ddd, DD MMMM YYYY LT">
                        {publicationDate}
                    </Moment>
                    <PlusIcon />
                </div>

            </div>
        </StyledHeader>
    )
}

Header.propTypes = {
    headline: PropTypes.string,
    byline: PropTypes.string,
    publicationDate: PropTypes.string,
    source: PropTypes.string
};