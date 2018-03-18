import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './ui/header';
import DonateForm from './forms/donation-form';

import { AUTH_TYPES, USER_TYPES, PAGES } from '../data/constants';

/* DonationPage:
 * A component that handles donations
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonationFormPage = (props) => {
    return (
        <React.Fragment>
            <Header as='h2'>Fill out the form below to Donate</Header>
            <DonateForm
                form={`donateForm${props.currentNonProfit}`}
                initialValues={{nonprofit: props.currentNonProfit}}
            />
        </React.Fragment>
    );
};

DonationFormPage.propTypes = {
    className: PropTypes.string,
    currentNonProfit: PropTypes.string,
};

const ms2p = ({ ui: { donate: { currentNonProfit } } }) => ({ currentNonProfit });

const DonationFormPageSmart = connect(ms2p, null)(DonationFormPage);

export default DonationFormPageSmart;
