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
    token: JSON.parse(localStorage.getItem('token')) || {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return state.set('tabLocation', action.tabLocation);
    case TABCHANGE_LOCATION:
      return state.set('tabLocation', action.tabLocation);
    case LOGIN_SUCCESS:
        localStorage.setItem('token', JSON.stringify(action.token));
        return state.set('token', action.token);
    case LOGOUT:
        localStorage.setItem('token', JSON.stringify({}));
        return state.set('token', {});
    default:
      return state;
  }
}

export default appReducer;
