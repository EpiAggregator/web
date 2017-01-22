import { take, call, put, select, takeLatest, takeEvery, cancel } from 'redux-saga/effects';

import { push } from 'react-router-redux';

import { changeLocation } from './actions';

import { makeSelectTabsChooser } from './selectors';

import { CHANGE_TAB } from './constants';

import { LOCATION_CHANGE } from 'react-router-redux';

function* updateLocation(action) {
    //put() act as dispatch()
    const url = yield put(push(action.tabLocation));
}

function* updateTab(action) {
    const loc = yield put(changeLocation(action.payload.pathname));
}


// Individual exports for testing
export function* defaultSagas() {
    const watcher = yield takeLatest(CHANGE_TAB, updateLocation);
    const watcher2 = yield takeLatest(LOCATION_CHANGE, updateTab);
}

// All sagas to be loaded
export default [
    defaultSagas,
];
