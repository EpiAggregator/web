/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this epiaggregator uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
    LOAD_FEEDSLIST,
    LOAD_FEEDSLIST_SUCCESS,
    LOAD_FEEDSLIST_ERROR,
    LOAD_FEEDSENTRIES,
    LOAD_FEEDSENTRIES_SUCCESS,
    LOAD_FEEDSENTRIES_ERROR,
    ENTRY_FAV,
    ENTRY_READ,
} from './constants';

/**
 * Load the feedlist, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_FEEDSLIST
 */
export function loadFeedsList() {
    return {
        type: LOAD_FEEDSLIST,
    };
}

/**
 * Dispatched when the feedlist are loaded by the request saga
 *
 * @param  {array} feeds The feeds data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_FEEDSLIST_SUCCESS passing the repos
 */
export function feedsLoaded(feeds) {
    return {
        type: LOAD_FEEDSLIST_SUCCESS,
        feeds,
    };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_FEEDSLIST_ERROR passing the error
 */
export function feedsLoadingError(error) {
    return {
        type: LOAD_FEEDSLIST_ERROR,
        error,
    };
}


export function loadFeedsEntries(id) {
    return {
        type: LOAD_FEEDSENTRIES,
        id,
    };
}

export function entriesLoaded(entries) {
    return {
        type: LOAD_FEEDSENTRIES_SUCCESS,
        entries,
    };
}

export function entriesLoadingError(error) {
    return {
        type: LOAD_FEEDSENTRIES_ERROR,
        error,
    };
}

export function readEntry(id) {
    return {
        type: ENTRY_READ,
        id,
    };
}

export function favEntry(id) {
    return {
        type: ENTRY_FAV,
        id,
    };
}
