import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Message, Button } from 'semantic-ui-react';

import { renderSelectFieldStyled, renderFieldStyled, renderCheckboxFieldStyled } from './fields';
import { isRequired } from './validation';

import { USER_TYPES } from '../../data/constants';

const ProfileUpdateForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
        regError,
        initialValues,
    } = props;
    const errorMsg = error || regError;
    
    const typeOptions = [
        {
            value: USER_TYPES.BUSINESS,
            text: "Business",
        },
        {
            value: USER_TYPES.NONPROFIT,
            text: "Non-Profit",
        },
    ]
    
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="type"
                component={renderSelectFieldStyled}
                label="Type"
                extraProps={{ fluid: true, options: typeOptions }}
                validate={[isRequired]}
                value="Business"
                addMargin
            />
            <Field
                name="name"
                component={renderFieldStyled}
                label="name"
                extraProps={{ fluid: true }}
                validate={[isRequired]}
                addMargin
            />
            <p>"Item or items you are donating"</p>
            <Field
                name="laptop"
                type="checkbox"
                component={renderCheckboxFieldStyled}
                label="Laptops"
            />
            <Field
                name="smartphone"
                type="checkbox"
                component={renderCheckboxFieldStyled}
                label="Smartphones"
            />
            <Field
                name="tablet"
                type="checkbox"
                component={renderCheckboxFieldStyled}
                label="Tablets"
            />
            { errorMsg && <Message error content={errorMsg} /> }
            <Button type="submit" disabled={submitting}>
                Register
            </Button>
        </form>
    );
};

export default reduxForm({
    form: 'profileUpdate' // a unique identifier for this form
})(ProfileUpdateForm);
