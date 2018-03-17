import merge from 'lodash/merge'

import { actionTypes } from './actions';
import { PAGES } from './constants';

const defaultState = {
    currentPage: PAGES.HOME,
};

const uiReducer = (state = defaultState, action) => {
    switch (action) {
        case actionTypes.SET_CURRENT_PAGE:
            return merge({}, state, {
                currentPage: action.payload,
            });
        default:
            return state;
    }
}

export default uiReducer;
