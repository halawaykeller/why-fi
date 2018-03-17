import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';


/* SplashPage:
 * A component that holds the content for the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const SplashPage = (props) => (
    <div className={props.className}>
        Hello World!
    </div>
);

SplashPage.propTypes = {
    className: PropTypes.string,
};

const SplashPageStyled = styled(SplashPage)`
    height: 100%;
`;

export default SplashPageStyled;
