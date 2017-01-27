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
    LOAD_FEEDSENTRIES,
    LOAD_FEEDSENTRIES_SUCCESS,
    LOAD_FEEDSENTRIES_ERROR,
    ENTRY_FAV,
    ENTRY_READ,
    UNREAD_ONLY,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    feedsLoading: true,
    feedsError: false,
    feedsList: [],
    entriesLoading: true,
    entriesError: false,
    entriesList: [],
    unReadOnly: false,
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_FEEDSLIST:
            return state
            .set('feedsLoading', true)
            .set('feedsError', false)
            .setIn(['feedsList'], fromJS( [] ));
        case LOAD_FEEDSLIST_SUCCESS:
            return state
            .setIn(['feedsList'], fromJS( action.feeds))
            .set('feedsLoading', false);
        case LOAD_FEEDSLIST_ERROR:
            return state
            .set('feedsError', action.error)
            .set('feedsLoading', false);
        case LOAD_FEEDSENTRIES:
            return state
            .set('entriesLoading', true)
            .set('entriesError', false)
            .setIn(['entriesList'], fromJS( [] ));
        case LOAD_FEEDSENTRIES_SUCCESS:
            return state
            .setIn(['entriesList'], fromJS( action.entries))
            .set('entriesLoading', false);
        case LOAD_FEEDSENTRIES_ERROR:
            return state
            .set('entriesError', action.error)
            .set('entriesLoading', false);
        case ENTRY_FAV:
            return state
            .setIn(['entriesList', action.id, 'favorite'], !state.getIn(['entriesList', action.id, 'favorite']));
        case ENTRY_READ:
            return state
            .setIn(['entriesList', action.id, 'read'], true);
        case UNREAD_ONLY:
            return state
            .setIn(['unReadOnly'], !state.getIn(['unReadOnly']));
        default:
            return state;
    }
}

export default homeReducer;
