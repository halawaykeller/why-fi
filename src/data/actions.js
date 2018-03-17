import actionCreator from './helpers';

// A list of actions that we can dispatch for redux

/* Action Types */
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const actionTypes = {
    SET_CURRENT_PAGE,
};

/* Actions */

// Set the current "page" of the system
export const setCurrentPage = actionCreator(SET_CURRENT_PAGE);
