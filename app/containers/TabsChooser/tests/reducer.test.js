
import { fromJS } from 'immutable';
import tabsChooserReducer from '../reducer';

describe('tabsChooserReducer', () => {
  it('returns the initial state', () => {
    expect(tabsChooserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
