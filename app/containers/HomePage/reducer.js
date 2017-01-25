/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
    LOAD_FEEDSLIST_SUCCESS,
    LOAD_FEEDSLIST,
    LOAD_FEEDSLIST_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    feedsLoading: false,
    feedsError: false,
    feedsList: [],
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FEEDSLIST:
            return state
            .set('feedsLoading', true)
            .set('feedsError', false)
            .setIn(['feedsList'], []);
        case LOAD_FEEDSLIST_SUCCESS:
            return state
            .setIn(['feedsList'], action.feeds)
            .set('feedsLoading', false);
        case LOAD_FEEDSLIST_ERROR:
            return state
            .set('feedsError', action.error)
            .set('feedsLoading', false);
        default:
            return state
            .setIn(['feedsList'], []); // Trick to have an array instead of a List
    }
}

export default homeReducer;
