import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from './title';
import ByLine from './by-line';
import Tagline from './tag-line';
import DonateAction from './donate-action';



const HeroContainer = (props) => (
    <div className={props.className}>
        <Title/>
        <ByLine/>
        <Tagline/>
        <DonateAction />
    </div>
);
    
HeroContainer.propTypes = {
    className: PropTypes.string,
};

const HeroContainerStyled = styled(HeroContainer)`
    background: rgba(255, 255, 255, .6);
    padding: 2em;
`;

export default HeroContainerStyled;