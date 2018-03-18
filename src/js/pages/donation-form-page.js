import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
import styled from 'styled-components';

import Header from '../ui/header';
import DonateForm from '../forms/donation-form';

import { AUTH_TYPES, USER_TYPES, PAGES } from '../../data/constants';
import { setCurrentPage } from '../../data/actions';

/* DonationPage:
 * A component that handles donations
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonationFormPage = (props) => (
    <div class={props.className}>
        <Header as='h2'>Fill out the form below to Donate</Header>
        <DonateForm
            form={`donateForm${props.currentNonProfit}`}
            initialValues={{nonprofit: props.currentNonProfit}}
            onSubmit={props.onSubmit}
        />
    </div>
);

DonationFormPage.propTypes = {
    className: PropTypes.string,
    currentNonProfit: PropTypes.string,
};

const DonationFormPageStyled = styled(DonationFormPage)`
    height: 100%;
    padding-top: 4em !important;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    max-width: 50%;
    
`;


const ms2p = ({ ui: { donate: { currentNonProfit } } }) => ({ currentNonProfit });
const md2p = (dispatch, ownProps) => ({
    onSubmit: (values) => {
        ownProps.firestore.add('donations', values);
        dispatch(setCurrentPage(PAGES.DONATION_CONFIRMATION_FORM));
    }
})

const DonationFormPageSmart = withFirestore(connect(ms2p, md2p)(DonationFormPageStyled));

export default DonationFormPageSmart;
