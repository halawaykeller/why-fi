import actionCreator from './helpers';

// A list of actions that we can dispatch for redux

/* Action Types */
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_AUTH_TYPE = 'SET_AUTH_TYPE';

export const actionTypes = {
    SET_CURRENT_PAGE,
    SET_AUTH_TYPE,
};

/* Actions */

// Set the current "page" of the system
export const setCurrentPage = actionCreator(SET_CURRENT_PAGE);

// Set the current "auth type" of the system
export const setAuthType = actionCreator(SET_AUTH_TYPE);
