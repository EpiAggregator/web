import { getAsyncInjectors } from './utils/asyncInjectors';

import { defaultSagas } from './containers/App/sagas';

export function injectGlobalSagas(store) {
    const { injectSagas } = getAsyncInjectors(store);

    injectSagas([
        defaultSagas,
    ]);
};
