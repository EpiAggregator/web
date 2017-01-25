/**
 * Requests
 */

import { API_R_ADDFEED } from '../../api';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { ADD_FEED } from './constants';
import { addFeedSucces, addFeedError } from './actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* putAddList(evt) {
    const requestURL = API_R_ADDFEED;
    console.log(evt);
    try {
        // Call our request helper (see 'utils/request')
        const feeds = yield call(request, requestURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                url: evt.url,
            })
        });
        yield put(addFeedSucces());
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
