
function isToken(store) {
    if (store.getState().get('global').get('token').token)
        return true;
    else if (store.getState().get('global').getIn(['token']) && store.getState().get('global').getIn(['token']).getIn(['token']))
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
