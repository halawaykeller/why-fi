import merge from 'lodash/merge'

import { actionTypes } from './actions';
import { PAGES, AUTH_TYPES } from './constants';

const defaultState = {
    currentPage: PAGES.HOME,
    auth: {
        authType: AUTH_TYPES.LOGIN,
        authPage: null,
        registrationUserType: null,
    },
    donate: {
        currentNonProfit: null,
    }
};

const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_PAGE:
            return merge({}, state, {
                currentPage: action.payload,
            });
        case actionTypes.SET_AUTH_TYPE:
            return merge({}, state, {
                auth: {
                    authType: action.payload,
                }
            });
        case actionTypes.SET_AUTH_PAGE:
            return merge({}, state, {
                auth: {
                    authPage: action.payload,
                }
            });
        case actionTypes.SET_CURRENT_NONPROFIT:
            return merge({}, state, {
                donate: {
                    currentNonProfit: action.payload,
                }
            });
        case actionTypes.SET_REGISTRATION_USER_TYPE:
            return merge({}, state, {
                auth: {
                    registrationUserType: action.payload,
                }
            });   
        default:
            return state;
    }
}

export default uiReducer;
