import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';
import { Header} from 'semantic-ui-react';

import { PrimaryButton as Button } from './ui/button';

import { 
    setCurrentPage,
    setAuthType,
    setAuthPage,
    setRegistrationUserType,
} from '../data/actions';
import { PAGES, AUTH_TYPES, USER_TYPES } from '../data/constants';

const Actions = (props) => {
    const userType = props.userType == USER_TYPES.BUSINESS 
        ? 'Business'
        : 'Non-Profit';
    const button = props.auth && props.auth.uid && props.profile.type == props.userType
        ? (<Button
                content='Check Donations List'
                onClick={props.onDonationListClick}
        />)
        : (<Button
                content='Login'
                onClick={props.onClick.bind(this, AUTH_TYPES.LOGIN, props.userType)}
            />);
    
    return (
        <div className={props.className}>
            <Header as='h3'>
                Are you a { userType } who wants to take action?
            </Header>
            <Button
                content='Register'
                onClick={props.onClick.bind(this, AUTH_TYPES.REGISTRATION, props.userType)}
            />
            {button}
        </div>
    );
        
};

const ActionsStyled = styled(Actions)`
    padding-top: 10px;
`;

const ms2p = ({ 
    ui: { currentPage },
    firebase: { auth, profile }
}) => ({ currentPage, auth, profile });
const md2p = (dispatch) => ({
    onDonationListClick: () => {
        dispatch(setCurrentPage(PAGES.DONATION_TRACKING))
    },
    onClick: (authType, userType) => {
        dispatch(setCurrentPage(PAGES.AUTH));
        dispatch(setAuthType(authType));
        dispatch(setRegistrationUserType(userType));
        if (authType == AUTH_TYPES.REGISTRATION) {
            dispatch(setAuthPage(1));
        }
    }
});

const ActionsSmart = connect(ms2p, md2p)(ActionsStyled);

/* SplashPageColumn:
 * A component that handles the styling for a column on the splash page
 *
 * Props:
 * className (str, optional):
 *     to be used by styled-components for styling
 */
const UserActions = (props) => (
    <div className={props.className}>
        <ActionsSmart userType={USER_TYPES.BUSINESS} />
        <ActionsSmart userType={USER_TYPES.NONPROFIT} />
    </div>
);

UserActions.propTypes = {
    className: PropTypes.string,
};

export default UserActions;
