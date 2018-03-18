import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { renderFieldStyled, renderSelectFieldStyled } from './fields';
import { isRequired } from './validation';

import { PrimaryButton as Button } from '../ui/button';

import { TECHNOLOGY_TYPES } from '../../data/constants';

const DonationForm = props => {
    const { 
        handleSubmit,
        submitting,
        error,
    } = props;
    const errorMsg = error;
    
     const typeOptions = [
        {
            value: TECHNOLOGY_TYPES.LAPTOP,
            text: "Laptop",
        },
        {
            value: TECHNOLOGY_TYPES.DESKTOP,
            text: "Desktop",
        },
        {
            value: TECHNOLOGY_TYPES.SMARTPHONE,
            text: "Smartphone",
        },
        {
            value: TECHNOLOGY_TYPES.TABLET,
            text: "Tablet",
        },
    ]
    
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
            <Field
                name="type"
                component={renderSelectFieldStyled}
                label="Type"
                extraProps={{ fluid: true, options: typeOptions }}
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

export default reduxForm({})(DonationForm);
