/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectFeedsLoading = () => createSelector(
    selectHome,
    (homeState) => homeState.get('feedsLoading')
);

const makeSelectFeedsError = () => createSelector(
    selectHome,
    (homeState) => homeState.get('feedsError')
);

const makeSelectFeedsList = () => createSelector(
    selectHome,
    (homeState) =>  homeState.getIn(['feedsList']).toJS()
);

const makeSelectEntriesLoading = () => createSelector(
    selectHome,
    (homeState) => homeState.get('entriesLoading')
);

const makeSelectEntriesError = () => createSelector(
    selectHome,
    (homeState) => homeState.get('entriesError')
);

const makeSelectEntriesList = () => createSelector(
    selectHome,
    (homeState) =>  homeState.getIn(['entriesList']).toJS()
);

export {
  selectHome,
  makeSelectFeedsLoading,
  makeSelectFeedsError,
  makeSelectFeedsList,
  makeSelectEntriesLoading,
  makeSelectEntriesError,
  makeSelectEntriesList,
};
