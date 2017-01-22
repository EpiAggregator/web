/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectLoading = () => createSelector(
    selectHome,
    (homeState) => homeState.get('loading')
);

const makeSelectError = () => createSelector(
    selectHome,
    (homeState) => homeState.get('error')
);

const makeSelectFeedsList = () => createSelector(
    selectHome,
    (homeState) => homeState.getIn(['feedsList'])
);

export {
  selectHome,
  makeSelectLoading,
  makeSelectError,
  makeSelectFeedsList,
};
