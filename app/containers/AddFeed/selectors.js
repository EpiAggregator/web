/**
 * addFeed selectors
 */

import { createSelector } from 'reselect';

const selectAddFeed = (state) => state.get('addFeed');

const makeSelectFeedsLoading = () => createSelector(
    selectAddFeed,
    (addFeedState) => addFeedState.get('feedsLoading')
);

const makeSelectFeedsError = () => createSelector(
    selectAddFeed,
    (addFeedState) => addFeedState.get('feedsError')
);

const makeSelectFeedsList = () => createSelector(
    selectAddFeed,
    (addFeedState) => addFeedState.getIn(['feedsList'])
);

const makeSelectAddFeedLoading = () => createSelector(
    selectAddFeed,
    (addFeedState) => addFeedState.get('addFeedLoading')
);

const makeSelectAddFeedError = () => createSelector(
    selectAddFeed,
    (addFeedState) => addFeedState.get('addFeedError')
);

export {
  selectAddFeed,
  makeSelectAddFeedLoading,
  makeSelectAddFeedError,
};
