/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const makeSelectTabsChooser = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['tabLocation'])
);

const makeSelectLoginError = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['loginError'])
);

const makeSelectRegisterSuccess = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['registerSuccess'])
);

const makeSelectRegisterError = () => createSelector(
    selectGlobal,
    (globalState) => globalState.getIn(['registerError'])
);

const makeSelectToken = () => createSelector(
    selectGlobal,
    (globalState) => { return JSON.parse(localStorage.getItem('token')); }
);

export {
  selectGlobal,
  makeSelectLocationState,
  makeSelectTabsChooser,
  makeSelectToken,
  makeSelectLoginError,
  makeSelectRegisterSuccess,
  makeSelectRegisterError,
};
