import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FirestoreFilter from '../firestore-hoc';

import styled from 'styled-components';
import { List } from 'semantic-ui-react';
import Header from '../ui/header';
import Button from '../ui/button';

import { AUTH_TYPES, USER_TYPES, TECHNOLOGY_TYPES } from '../../data/constants';

import { PAGES } from '../../data/constants';

const DonationItem = (props) => {
    const { donation } = props;
    let button = null;
    let donationType = null;
    switch (donation.type) {
        case TECHNOLOGY_TYPES.LAPTOP:
            donationType = 'Laptop';
            break;
        case TECHNOLOGY_TYPES.SMARTPHONE:
            donationType = 'Smartphone';
            break;
        case TECHNOLOGY_TYPES.DESKTOP:
            donationType = 'Desktop';
            break;
        case TECHNOLOGY_TYPES.TABLET:
            donationType = 'Tablet';
            break;
    }
    
    // if the donation isn't ready
    if (!donation.ready) {
        // if there's not a business set and we're a nonprofit, add an arrived button
        if (props.userType == USER_TYPES.NONPROFIT && !donation.business) {
            button = (
                <Button 
                    content='Arrived'
                />
            );
        }
        // if we're a business, add a refurbished button
        else if (props.userType == USER_TYPES.BUSINESS) {
            button = (
                <Button 
                    content='Refurbished'
                />
            );
        }
    }
    else {
        // if it's ready, and we're a nonprofit, and there's a business - show an arrived button
        if (props.userType == USER_TYPES.NONPROFIT && donation.business) {
            button = (
                <Button 
                    content='Arrived'
                />
            );
        }
    }
    
    return (
        <List.Item
            key={donation.id}
            className={props.className}
        >
            <List.Content floated='right'>
                {button}
            </List.Content>
            <List.Content>
                {donation.name} - {donationType}
            </List.Content>
        </List.Item>
    );
};

/* DonationPage:
 * A component that handles donations
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonationTrackingPage = (props) => {
    const listItems = [];
    
    for (const donation of props.donations) {
        listItems.push(
            <DonationItem
                key={donation.id}
                donation={donation}
                userType={props.userType}
            />
        );
    }
    
    return (
        <React.Fragment>
            <Header as='h2'>Current Donations</Header>
            <List relaxed divided className={props.className}>
                {listItems}
            </List>
        </React.Fragment>
    );
};

DonationTrackingPage.propTypes = {
    className: PropTypes.string,
    donations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
    })),
};

DonationTrackingPage.defaultProps = {
    donations: [],
};

const DonationTrackingPageStyled = styled(DonationTrackingPage)`
    height: 100%;
`;

const ms2p = ({
    firestore: { ordered: { donations } },
    firebase: { profile: { type } }
}) => ({
    donations,
    userType: type,
});

const md2p = (dispatch) => ({
});

const DonationTrackingPageSmart = FirestoreFilter(
    [ { collection: 'donations' } ]
)(connect(ms2p, md2p)(DonationTrackingPageStyled));

export default DonationTrackingPageSmart;
