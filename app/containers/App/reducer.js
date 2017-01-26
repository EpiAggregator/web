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
    LOGIN_SUCCESS,
    LOGOUT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    tabLocation: window.location.pathname, // Initial location from uri
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return state.set('tabLocation', action.tabLocation);
    case TABCHANGE_LOCATION:
      return state.set('tabLocation', action.tabLocation);
    case LOGIN_SUCCESS:
        let tok = action.token;
        localStorage.setItem('token', JSON.stringify(tok));
        return state;
    case LOGOUT:
        localStorage.setItem('token', JSON.stringify({}));
        return state;
    default:
      return state;
  }
}

export default appReducer;
