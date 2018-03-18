import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ByLine = (props) => (
    <React.Fragment>
<<<<<<< HEAD
        <h2 className={props.className}>
           Access to technology is critical to success in our world.
        </h2>
        <h5>
            Donate your laptop, smartphone, or tablet to someone in need
        </h5>
=======
        <h4 className={props.className}>
           Access to technology is critical to success in our fast-paced world. 
        </h4>
        <h2>
            Donate your laptop, smartphone, or tablet to create opportunity for someone in need.
        </h2>
>>>>>>> 1a87bc3b6a49b21fda37decf1307bc027e47101d
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