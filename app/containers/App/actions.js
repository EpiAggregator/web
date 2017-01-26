/*
 * App Actions
 *
 * Actions change things in your application
 * Since this epiaggregator uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_TAB, TABCHANGE_LOCATION, LOGOUT, REGISTER, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './constants'

export function changeTab(tabLocation) {
    return {
        type: CHANGE_TAB,
        tabLocation,
    };
}

export function changeLocation(tabLocation) {
    return {
        type: TABCHANGE_LOCATION,
        tabLocation,
    };
}


export function logout() {
    return {
        type: LOGOUT,
    };
}

export function login(data) {
    return {
        type: LOGIN,
        data,
    };
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        token,
    };
}

export function loginError(err) {
    return {
        type: LOGIN_ERROR,
        err,
    };
}

export function register(data) {
    return {
        type: REGISTER,
        data,
    };
}


export function registerSuccess() {
    return {
        type: REGISTER_SUCCESS,
    };
}

export function registerError(err) {
    return {
        type: REGISTER_ERROR,
        err,
    };
}

