/**
 * Requests
 */

import { API_R_FEEDS } from '../../api';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_FEEDSLIST } from './constants';
import { feedsLoaded, feedsLoadingError } from './actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

export function* getFeedsList() {
  const requestURL = API_R_FEEDS;
  try {
    // Call our request helper (see 'utils/request')
    const feeds = yield call(request, requestURL);
    yield put(feedsLoaded(feeds));
  } catch (err) {
    yield put(feedsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* feedsList() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_FEEDSLIST, getFeedsList);

}

// Bootstrap sagas
export default [
  feedsList,
];
