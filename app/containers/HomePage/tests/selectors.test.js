import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectFeedsError,
} from '../selectors';

describe('makeSelectFeedsError', () => {
    const feedSelector = makeSelectFeedsError();
  it('should select the feed status', () => {
    const feedsError = false;
    const mockedState = fromJS({
      home: {
        feedsError,
      },
    });
    expect(feedSelector(mockedState)).toEqual(username);
  });
});
