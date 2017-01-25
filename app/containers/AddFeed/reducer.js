/*
 * AddFeed reducer
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
    ADD_FEED,
    ADD_FEED_SUCCESS,
    ADD_FEED_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    addFeedLoading: false,
    addFeedError: false,
});


function addFeedReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FEED:
            return state
            .set('addFeedLoading', true)
            .set('addFeedError', false);
        case ADD_FEED_SUCCESS:
            return state
            .set('addFeedLoading', false);
        case ADD_FEED_ERROR:
            return state
            .set('addFeedError', action.error)
            .set('addFeedLoading', false);
        default:
            return state;
    }
}

export default addFeedReducer;
