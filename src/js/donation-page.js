import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import styled from 'styled-components';
import { List } from 'semantic-ui-react';

import { AUTH_TYPES } from '../data/constants';

/* DonationPage:
 * A component that handles donations
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const DonationPage = (props) => {
    const listItems = [];
    
    for (const nonprofit of props.nonProfits) {
        listItems.push(
            <List.Item key={nonprofit.id}>
                {nonprofit.name}
            </List.Item>
        );
    }
    
    return (
        <List className={props.className}>
            {listItems}
        </List>
    );
};

DonationPage.propTypes = {
    className: PropTypes.string,
    nonProfits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
    })),
};

DonationPage.defaultProps = {
    nonProfits: [],
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
