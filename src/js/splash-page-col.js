import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const SplashPageColumnTitle = (props) => (
    <div className={props.className}>
        {props.title}
    </div>
);

const SplashPageColumnTitleStyled = styled(SplashPageColumnTitle)`
    font-size: 25px;
    padding-bottom: 20px;
`;


/* SplashPageColumn:
 * A component that handles the styling for a column on the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const SplashPageColumn = (props) => (
    <div className={props.className}>
        <SplashPageColumnTitleStyled title={props.title} />
        {props.children}
    </div>
);

SplashPageColumn.propTypes = {
    className: PropTypes.string,
};

const SplashPageColumnStyled = styled(SplashPageColumn)`
    padding: 40px;
    border-bottom: 1px black solid;
`;

export default SplashPageColumnStyled;
