import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tagline = (props) => (
    <React.Fragment>
        <h2 className={props.className}>
            Access to technology is critical to success in our fast-paced world. Donate your gently used laptop, smartphone, or tablet to help connect someone in need to a brighter future.
        </h2>
    </React.Fragment>
    
);
    
Tagline.propTypes = {
    className: PropTypes.string,
};

const TaglineStyled = styled(Tagline)`
    color: black;
    text-align: left;
    font-size: 2vw;
`;

export default TaglineStyled;