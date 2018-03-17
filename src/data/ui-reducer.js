import merge from 'lodash/merge'

import { actionTypes } from './actions';
import { PAGES } from './constants';

const defaultState = {
    currentPage: PAGES.HOME,
    authType: null,
};

const uiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_PAGE:
            return merge({}, state, {
                currentPage: action.payload,
            });
        case actionTypes.SET_AUTH_TYPE:
            return merge({}, state, {
                authType: action.payload,
            });
        default:
            return state;
    }
}

export default uiReducer;
