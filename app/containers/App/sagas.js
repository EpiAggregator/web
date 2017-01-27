import { take, call, put, select, takeLatest, takeEvery, cancel } from 'redux-saga/effects';

import { push } from 'react-router-redux';
import { changeLocation, loginSuccess, loginError, registerSuccess, registerError } from './actions';
import { makeSelectTabsChooser } from './selectors';

import { CHANGE_TAB, LOGOUT, LOGIN, LOGIN_SUCCESS, REGISTER, REGISTER_SUCCESS } from './constants';
import { LOCATION_CHANGE } from 'react-router-redux';

import { API_R_TOKEN, API_R_USER } from '../../api';
import request from 'utils/request';

function* updateLocation(action) {
    //put() act as dispatch()
    const url = yield put(push(action.tabLocation));
}

function* updateTab(action) {
    const loc = yield put(changeLocation(action.payload.pathname));
}

function* initiateLogin(action) {
    try {
        const token = yield call(request, API_R_TOKEN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: action.data.get('email'),
                password: action.data.get('password'),
            })
        });
        yield put(loginSuccess(token));
    } catch (err) {
        yield put(loginError(err));
    }

}

function* initiateRegister(action) {
    try {
        const token = yield call(request, API_R_USER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: action.data.get('email'),
                password: action.data.get('password'),
            })
        });
        yield put(registerSuccess());
    } catch (err) {
        yield put(registerError(err));
    }

}

function* loggedIn(action) {
    const url = yield put(push("/")); // GO home
}

function* loggedOut(action) {
    const url = yield put(push("/login")); // GO login //doesn't work
}

// Individual exports for testing
export function* defaultSagas() {
    const watcher = yield takeLatest(CHANGE_TAB, updateLocation);
    const watcher2 = yield takeLatest(LOCATION_CHANGE, updateTab);
    const watcher3 = yield takeLatest(LOGOUT, loggedOut);
    const watcher4 = yield takeLatest(LOGIN, initiateLogin);
    const watcher5 = yield takeLatest(LOGIN_SUCCESS, loggedIn);
    const watcher6 = yield takeLatest(REGISTER, initiateRegister);
}

// All sagas to be loaded
export default [
    defaultSagas,
];
