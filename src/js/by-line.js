import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ByLine = (props) => (
    <React.Fragment>
        <h4 className={props.className}>
           Connecting old technology to new opportunities.
        </h4>
    </React.Fragment>
    
);
    
ByLine.propTypes = {
    className: PropTypes.string,
};

const ByLineStyled = styled(ByLine)`
    color: black;
    text-align: left;
    font-size: 4vw;
`;

export default ByLineStyled;