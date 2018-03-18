import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FirestoreFilter from '../firestore-hoc';

import styled from 'styled-components';
import { List } from 'semantic-ui-react';
import Header from '../ui/header';

import { AUTH_TYPES, USER_TYPES } from '../../data/constants';

import { PAGES } from '../../data/constants';

const DonationItem = (props) => (
    <List.Item
        key={props.donation.id}
        className={props.className}
    >
        {props.donation.name}
    </List.Item>
);

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
                donation={donation}
            />
        );
    }
    
    return (
        <React.Fragment>
            <Header as='h2'></Header>
            <List className={props.className}>
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
}) => ({
    donations 
});

const md2p = (dispatch) => ({
});

const DonationTrackingPageSmart = FirestoreFilter(
    [ { collection: 'donations' } ],
    'nonprofit'
)(connect(ms2p, md2p)(DonationTrackingPageStyled));

export default DonationTrackingPageSmart;
