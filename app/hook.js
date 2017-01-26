import { makeSelectToken } from 'containers/App/selectors';

function isToken(store) {
    const state = store.getState().get('global');
    let token = makeSelectToken()(state);
    if (token.token)
        return true;
    return false;
}

function redirectToLogin(store) {
    return (nextState, replace) => {
        if (!isToken(store)) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    };
}

function redirectToDashboard(store) {
    return (nextState, replace) => {
        if (isToken(store)) {
            replace('/');
        }
    };
}

/**
 * Helper for creating injectors
 */
export default function getHooks(store) {
    return {
        redirectToLogin: redirectToLogin(store),
        redirectToDashboard: redirectToDashboard(store)
    };
}
