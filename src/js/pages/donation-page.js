import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import styled from 'styled-components';
import { List } from 'semantic-ui-react';
import Header from '../ui/header';

import { AUTH_TYPES, USER_TYPES } from '../../data/constants';

<<<<<<< HEAD
import { setCurrentPage, setCurrentNonProfit } from '../../data/actions';
import { PAGES } from 'constants';
=======
import { setCurrentPage, setCurrentNonProfit } from '../data/actions';
import { PAGES } from '../data/constants';

const DonationListItem = (props) => (
    <List.Item
        key={props.nonprofit.id}
        onClick={props.onClick.bind(this, props.nonprofit.id)}
        className={props.className}
    >
        {props.nonprofit.name}
    </List.Item>
);

const DonationListItemStyled = styled(DonationListItem)`
    cursor: pointer;
`;
>>>>>>> 5686d1896db4ce42cbfe92629eb4af1b6b2b693a

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
            <DonationListItemStyled
                nonprofit={nonprofit}
                onClick={props.onClick}
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

const md2p = (dispatch) => ({
    onClick: (npId) => {
        dispatch(setCurrentNonProfit(npId));
        dispatch(setCurrentPage(PAGES.DONATE_FORM));
    }
});

const DonationPageSmart = firestoreConnect([
    { collection: 'users', where: [ ['type', '==', USER_TYPES.NONPROFIT], ['hiatus', '==', false]] }
])(connect(ms2p, md2p)(DonationPageStyled));

export default DonationPageSmart;
