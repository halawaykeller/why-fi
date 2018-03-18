import React from 'react'
import { Field, reduxForm } from 'redux-form'


import { renderFieldStyled } from './fields';
import { isRequired } from './validation';

import { PrimaryButton as Button } from '../ui/button';

const LoginForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
        loginError,
    } = props;
    const errorMsg = error || loginError;
    
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="name"
                type="text"
                component={renderFieldStyled}
                label="Name"
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <Field
                name="email"
                type="email"
                component={renderFieldStyled}
                label="Email"
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            { errorMsg && <Message error content={errorMsg} /> }
            <Button type="submit" disabled={submitting}>
                Submit Donation
            </Button>
        </form>
    );
};

export default reduxForm({
    form: 'auth' // a unique identifier for this form
})(LoginForm);