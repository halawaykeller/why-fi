import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styled from 'styled-components';

import { PrimaryButton as Button } from '../ui/button';

import { setCurrentPage, setAuthType, setAuthPage } from '../data/actions';
import { PAGES, AUTH_TYPES } from '../data/constants';

const Actions = (props) => (
    <div className={props.className}>
        <Header as='h3'>
            Are you a {props.call} who wants to take action?
        </Header>
        <Button
            content='Register'
            onClick={props.onClick.bind(this, AUTH_TYPES.REGISTRATION)}
        />
        <Button
            content='Login'
            onClick={props.onClick.bind(this, AUTH_TYPES.LOGIN)}
        />
    </div>
);

const ActionsStyled = styled(Actions)`
    padding-top: 10px;
`;

const ms2p = ({ ui: { currentPage } }) => ({ currentPage });
const md2p = (dispatch) => ({
    onClick: (authType) => {
        dispatch(setCurrentPage(PAGES.AUTH));
        dispatch(setAuthType(authType));
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
        <ActionsSmart call="Business" />
        <ActionsSmart call="Non-Profit" />
    </div>
);

UserActions.propTypes = {
    className: PropTypes.string,
};

export default UserActions;
