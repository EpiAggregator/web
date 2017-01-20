import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeUsername,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
      state = fromJS({
          feedsLoading: true,
          feedsError: false,
          feedsList: [],
          entriesLoading: true,
          entriesError: false,
          entriesList: [],
          unReadOnly: false,
      });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

});
