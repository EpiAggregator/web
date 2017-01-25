import { getAsyncInjectors } from './utils/asyncInjectors';

import { changeTab } from './containers/TabsPageChooser/sagas';

export function injectGlobalSagas(store) {
    const { injectSagas } = getAsyncInjectors(store);

    injectSagas([
        changeTab,
    ]);
};
