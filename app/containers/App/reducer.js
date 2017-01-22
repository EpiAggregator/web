/*
 * AppReducer
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
    CHANGE_TAB,
    TABCHANGE_LOCATION,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    tabLocation: window.location.pathname // Initial location from uri
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return state.set('tabLocation', action.tabLocation);
    case TABCHANGE_LOCATION:
      return state.set('tabLocation', action.tabLocation);
    default:
      return state;
  }
}

export default appReducer;
