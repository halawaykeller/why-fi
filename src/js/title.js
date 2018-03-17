import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Title = (props) => (
    <h1 className={props.className}>
        Why-Fi
    </h1>
);

Title.propTypes = {
    className: PropTypes.string,
};

const TitleStyled = styled(Title)`
    color: black;
    text-align: left;
`;

export default TitleStyled;