import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import { SubmissionError } from 'redux-form';

import styled from 'styled-components';

import LoginForm from './forms/login-form';
import RegisterForm from './forms/register-form';
import ProfileUpdateForm from './forms/profile-update-form';

import { AUTH_TYPES } from '../data/constants';

/* AuthPage:
 * A component that handles auth for our users
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const AuthPage = (props) => {
    const isRegistration = props.authType == AUTH_TYPES.REGISTRATION;
    let FormComponent = LoginForm;
    let onSubmit = props.onLogin;
    let error = {};
    console.log(isRegistration);
    console.log(props);
    
    if (isRegistration) {
        FormComponent = props.authPage == 1 ? RegisterForm : ProfileUpdateForm;
        onSubmit = props.authPage == 1
            ? props.onRegister
            : props.onProfileUpdate;
    }
    
    if (props.authError) {
        error = isRegistration
            ? { regError: props.authError.message }
            : { loginError: props.authError.message };
    }
    
    return (
        <div className={props.className}>
            <FormComponent onSubmit={onSubmit} {...error} />
        </div>
    );
};

AuthPage.propTypes = {
    className: PropTypes.string,
};

const AuthPageStyled = styled(AuthPage)`
    height: 100%;
`;

const ms2p = ({
    ui: { auth: { authType, authPage } },
    firebase: { authError },
}) => ({
    authType,
    authPage,
    authError,
});
const md2p = (dispatch, ownProps) => ({
    onLogin: (values) => {
        console.log('login', values);
    },
    onRegister: (values) => {
        const { email, password, retype_password } = values;
        
        if (password != retype_password) {
            const msg = 'Passwords do not Match';
            throw new SubmissionError({
                password: msg,
                password_retype: msg,
                _error: 'Registration Failed. Please check your information and try again.'
            });
        }
        
        ownProps.firebase.createUser({ email, password });
    },
    onProfileUpdate: (values) => {
        console.log('profile update', values);
    }
});

const AuthPageSmart = withFirestore(connect(ms2p, md2p)(AuthPageStyled));

export default AuthPageSmart;
