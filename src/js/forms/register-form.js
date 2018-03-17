import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message, Button } from 'semantic-ui-react';

import { renderFieldStyled } from './fields';
import { isRequired } from './validation';

const RegisterForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
        regError,
    } = props;
    const errorMsg = error || regError;
    
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="email"
                type="email"
                component={renderFieldStyled}
                label="Email"
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <Field
                name="password"
                type="password"
                component={renderFieldStyled}
                label="Password"
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <Field
                name="retype_password"
                type="retype_password"
                component={renderFieldStyled}
                label="Retype Password"
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            { errorMsg && <Message error content={errorMsg} /> }
            <Button type="submit" disabled={submitting}>
                Register
            </Button>
        </form>
    );
};

export default reduxForm({
    form: 'reg' // a unique identifier for this form
})(RegisterForm);