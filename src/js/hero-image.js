import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import bkgImg from '../images/girl_1280.jpg';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Title from './title';
import ByLine from './by-line';
=======
import title from '/title.js';
>>>>>>> Stashed changes
=======
import title from '/title.js';
>>>>>>> Stashed changes


/* HeroImage:
 * A component that holds a hero image
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const HeroImage = (props) => (
    <div className={props.className}>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
       <Title/>
       <ByLine/>
=======
       <title/>
>>>>>>> Stashed changes
=======
       <title/>
>>>>>>> Stashed changes
    </div>
);

HeroImage.propTypes = {
    className: PropTypes.string,
};

const HeroImageStyled = styled(HeroImage)`
    height: 100vh;
    background-image: url(${bkgImg});
    padding: 40px;
    
    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export default HeroImageStyled;
