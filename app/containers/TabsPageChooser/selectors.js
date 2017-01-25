import { createSelector } from 'reselect';

/**
 * Direct selector to the tabsPageChooser state domain
 */
const selectTabsPageChooserDomain = () => (state) => state.get('tab');

/**
 * Other specific selectors
 */

const makeSelectTab = () => createSelector(
    selectTabsPageChooserDomain,
    (tabState) => tabState.get('tabIdx')
);


/**
 * Default selector used by TabsPageChooser
 */

const makeSelectTabsPageChooser = () => createSelector(
  selectTabsPageChooserDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTabsPageChooser;
export {
  selectTabsPageChooserDomain,
  makeSelectTab,
};
