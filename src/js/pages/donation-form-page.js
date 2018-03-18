import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

import Header from '../ui/header';
import DonateForm from '../forms/donation-form';

import { AUTH_TYPES, USER_TYPES, PAGES } from '../../data/constants';

/* DonationPage:
 * A component that handles donations
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonationFormPage = (props) => (
    <React.Fragment>
        <Header as='h2'>Fill out the form below to Donate</Header>
        <DonateForm
            form={`donateForm${props.currentNonProfit}`}
            initialValues={{nonprofit: props.currentNonProfit}}
            onSubmit={props.onSubmit}
        />
    </React.Fragment>
);

DonationFormPage.propTypes = {
    className: PropTypes.string,
    currentNonProfit: PropTypes.string,
};

const ms2p = ({ ui: { donate: { currentNonProfit } } }) => ({ currentNonProfit });
const md2p = (dispatch, ownProps) => ({
    onSubmit: (values) => {
        ownProps.firestore.add('donations', values);
    }
})

const DonationFormPageSmart = withFirestore(connect(ms2p, md2p)(DonationFormPage));

export default DonationFormPageSmart;
