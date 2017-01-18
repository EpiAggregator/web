/*
 *
 * TabsPageChooser reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_TAB,
} from './constants';

const initialState = fromJS({
    tab: 0,
});

function tabsPageChooserReducer(state = initialState, action) {
  switch (action.type) {
      case CHANGE_TAB:
      return state.set('tab', action.tab);
    default:
      return state;
  }
}

export default tabsPageChooserReducer;
