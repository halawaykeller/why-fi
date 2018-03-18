import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import styled from 'styled-components';

import { AUTH_TYPES } from '../data/constants';

/* DonationPage:
 * A component that handles donations
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonationPage = (props) => {
    console.log(props);
    return (
        <div className={props.className}>
            Hello World!
        </div>
    );
};

DonationPage.propTypes = {
    className: PropTypes.string,
};

const DonationPageStyled = styled(DonationPage)`
    height: 100%;
`;

const ms2p = ({
    firestore: { ordered: { users: nonProfits } },
}) => ({
    nonProfits 
});

const DonationPageSmart = firestoreConnect([
    { collection: 'users', where: ['type', '==', 'nonprofit'] }
])(connect(ms2p, () => ({}))(DonationPageStyled));

export default DonationPageSmart;
