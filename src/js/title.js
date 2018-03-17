import React from 'react';
import styled from 'styled-components';

const Title = (props) => (
    <div className={props.className}>
        Why-Fi
    </div>
);

// Title.propTypes = {
//     className: PropTypes.string,
// };

const TitleStyled = styled.h1`
    font-family: times;
    text-align: center;
`;

export default TitleStyled;