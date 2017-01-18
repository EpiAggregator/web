
import { fromJS } from 'immutable';
import tabsPageChooserReducer from '../reducer';

describe('tabsPageChooserReducer', () => {
  it('returns the initial state', () => {
    expect(tabsPageChooserReducer(undefined, {})).toEqual(fromJS({}));
  });
});
