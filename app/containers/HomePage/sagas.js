/**
 * Requests
 */

import { API_R_FEEDS } from '../../api';

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_FEEDSLIST, LOAD_FEEDSENTRIES, ENTRY_FAV, ENTRY_READ } from './constants';
import { ADD_FEED_SUCCESS } from 'containers/AddFeed/constants';
import { feedsLoaded, feedsLoadingError, entriesLoaded, entriesLoadingError } from './actions';

import { makeSelectToken } from 'containers/App/selectors';
import { makeSelectFeedsList, makeSelectEntriesList } from 'containers/HomePage/selectors';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

function* remoteFeed(localId) {
   const feeds = yield select(makeSelectFeedsList());
   return feeds[localId];
}

function* remoteEntry(localId) {
    const entries = yield select(makeSelectEntriesList());
    return entries[localId];
}

export function* getFeedsList() {
  const requestURL = API_R_FEEDS;
  const token = yield select(makeSelectToken());
  try {
      const feeds = yield call(request, requestURL, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': token.type + " " + token.token,
          },
      });
    yield put(feedsLoaded(feeds));
  } catch (err) {
    yield put(feedsLoadingError(err));
  }
}

export function* getFeedEntries(action) {
    let feedLocalId = action.id;
    let remoteId = "";
    if (feedLocalId !== null) {
        const feed = yield remoteFeed(feedLocalId);
        if (feed)
          remoteId = "/" + feed.id;
    }
    const requestURL = API_R_FEEDS + remoteId + '/entries';
    const token = yield select(makeSelectToken());
    try {
        const entries = yield call(request, requestURL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token.type + " " + token.token,
            },
        });
        yield put(entriesLoaded(entries));
    } catch (err) {
        yield put(entriesLoadingError(err));
    }
}

export function* updateEntry(action) {
    let entryLocalId = action.id;
    let rEntry = yield remoteEntry(entryLocalId);
    const requestURL = API_R_FEEDS + "/" + rEntry.feedId + '/entries/' + rEntry.id;
    const token = yield select(makeSelectToken());
    try {
        const entries = yield call(request, requestURL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token.type + " " + token.token,
            },
            body: JSON.stringify({
                read: rEntry.read,
                favorite: rEntry.favorite,
            })
        });
    } catch (err) {
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
  const watcher3 = yield takeLatest(LOAD_FEEDSLIST, getFeedEntries);
  const watcher2 = yield takeLatest(ADD_FEED_SUCCESS, getFeedsList);
  const watcher7 = yield takeLatest(LOAD_FEEDSENTRIES, getFeedEntries);
  const watcher6 = yield takeLatest(ENTRY_FAV, updateEntry);
  const watcher5 = yield takeLatest(ENTRY_READ, updateEntry);

}

// Bootstrap sagas
export default [
  feedsList,
];
