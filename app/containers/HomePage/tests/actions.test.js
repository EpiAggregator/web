import {
  CHANGE_USERNAME,
} from '../constants';

import {
    feedsLoadingError,
} from '../actions';

describe('Home Actions', () => {
    describe('feedsLoading', () => {
    it('should return the correct type and the values', () => {
      const fixture = true;
      const expectedResult = {
        type: LOAD_FEEDSENTRIES_ERROR,
        name: fixture,
      };

      expect(feedsLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
