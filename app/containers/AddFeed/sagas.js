/**
 * Requests
 */

import { API_R_FEEDS } from '../../api';

import { delay } from 'redux-saga';
import { take, call, put, select, cancel, takeLatest, fork } from 'redux-saga/effects';
import { ADD_FEED } from './constants';
import { addFeedSucces, addFeedError } from './actions';

import { makeSelectToken } from 'containers/App/selectors';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

function* updateFeedlist() {
    yield call(delay, 500);
    yield put(addFeedSucces());
}

export function* putAddList(action) {
    const token = yield select(makeSelectToken());
    try {
        // Call our request helper (see 'utils/request')
        const feed = yield call(request, API_R_FEEDS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token.type + " " + token.token,
            },
            body: JSON.stringify([
                action.feedUrl.get('url'),
            ])
        });
        yield fork(updateFeedlist);
    } catch (err) {
        yield put(addFeedError(err));
    }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* addFeed() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    const watcher = yield takeLatest(ADD_FEED, putAddList);
}

// Bootstrap sagas
export default [
addFeed,
];
