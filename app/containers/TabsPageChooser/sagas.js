import { take, call, put, select } from 'redux-saga/effects';

import { makeSelectTab } from 'containers/TabsPageChooser/selectors';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, push } from 'react-router-redux'

import { CHANGE_TAB } from 'containers/TabsPageChooser/constants';

// Individual exports for testing
export function* changeTab() {
//   const watcher = yield take(CHANGE_TAB);
//   const tab = yield select(makeSelectTab());
  console.log('Hello');
//   store.dispatch(push(tab));

//   yield cancel(watcher);
}

// All sagas to be loaded
export default [
    changeTab,
];
