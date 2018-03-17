import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import LoginForm from './forms/login-form';
import RegisterForm from './forms/register-form';

import { AUTH_TYPES } from '../data/constants';

/* AuthPage:
 * A component that handles auth for our users
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const AuthPage = (props) => {
    const FormComponent = props.authType == AUTH_TYPES.REGISTRATION
        ? RegisterForm
        : LoginForm;
    
    return (
        <div className={props.className}>
            <FormComponent />
        </div>
    );
};

AuthPage.propTypes = {
    className: PropTypes.string,
};

const AuthPageStyled = styled(AuthPage)`
    height: 100%;
`;

const ms2p = ({ ui: { authType } }) => ({ authType });

const AuthPageSmart = connect(ms2p, () => ({}))(AuthPageStyled);

export default AuthPageSmart;
