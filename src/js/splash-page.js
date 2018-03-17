import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import HeroImage from './hero-image';

/* SplashPage:
 * A component that holds the content for the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const SplashPage = (props) => (
    <div className={props.className}>
        <HeroImage />
    </div>
);

SplashPage.propTypes = {
    className: PropTypes.string,
};

const SplashPageStyled = styled(SplashPage)`
    height: 100%;
`;

export default SplashPageStyled;
