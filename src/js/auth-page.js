import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

/* AuthPage:
 * A component that handles auth for our users
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const AuthPage = (props) => (
    <div className={props.className}>
        Auth is important
    </div>
);

AuthPage.propTypes = {
    className: PropTypes.string,
};

const AuthPageStyled = styled(AuthPage)`
    height: 100%;
`;

export default AuthPageStyled;
