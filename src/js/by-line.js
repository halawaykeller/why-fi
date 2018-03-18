import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ByLine = (props) => (
    <React.Fragment>
        <h4 className={props.className}>
           Connecting old technology to new opportunities.
        </h4>
        <h2>
            Access to technology is critical to success in our fast-paced world. Donate your gently used laptop, smartphone, or tablet to help connect someone in need to a brighter future.
        </h2>
    </React.Fragment>
    
);
    
ByLine.propTypes = {
    className: PropTypes.string,
};

const ByLineStyled = styled(ByLine)`
    color: black;
    text-align: left;
    font-size: 4em;
`;

export default ByLineStyled;