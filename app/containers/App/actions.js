/*
 * App Actions
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

import { CHANGE_TAB, TABCHANGE_LOCATION } from './constants'

export function changeTab(tabLocation) {
    return {
        type: CHANGE_TAB,
        tabLocation,
    };
}

export function changeLocation(tabLocation) {
    return {
        type: TABCHANGE_LOCATION,
        tabLocation,
    };
}
