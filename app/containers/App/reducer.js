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
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    tabLocation: window.location.pathname, // Initial location from uri
    loginError: false,
    registerError: false,
    registerSuccess: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return state.set('tabLocation', action.tabLocation);
    case TABCHANGE_LOCATION:
      return state.set('tabLocation', action.tabLocation);
    case REGISTER:
        return state.set('loginError', false).set('registerError', false).set('registerSuccess', false);
    case REGISTER_ERROR:
        return state.set('loginError', false).set('registerError', true).set('registerSuccess', false);
    case REGISTER_SUCCESS:
        return state.set('loginError', false).set('registerError', false).set('registerSuccess', true);
    case LOGIN_ERROR:
        return state.set('loginError', true).set('registerError', false).set('registerSuccess', false);
    case LOGIN_SUCCESS:
        let tok = action.token;
        localStorage.setItem('token', JSON.stringify(tok));
        return state.set('loginError', false).set('registerError', false).set('registerSuccess', false);
    case LOGOUT:
        localStorage.setItem('token', JSON.stringify({}));
        return state.set('loginError', false).set('registerError', false).set('registerSuccess', false);
    default:
      return state;
  }
}

export default appReducer;
