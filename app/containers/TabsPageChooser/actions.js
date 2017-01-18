/*
 *
 * TabsPageChooser actions
 *
 */

import {
  CHANGE_TAB,
} from './constants';

export function changeTab(tabId, url) {
  return {
    type: CHANGE_TAB,
    tab: tabId,
    url: url,
  };
}
