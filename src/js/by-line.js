import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ByLine = (props) => (
    <p className={props.className}>
    Some Text
    </p>
);
    
ByLine.propTypes = {
    className: PropTypes.string,
};

const ByLineStyled = styled(ByLine)`
color: red;
text-align: center;
`;

export default ByLineStyled;