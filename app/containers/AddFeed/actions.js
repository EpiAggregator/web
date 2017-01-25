import {
    ADD_FEED,
    ADD_FEED_SUCCESS,
    ADD_FEED_ERROR,
} from './constants';

export function addFeed(feedUrl) {
    return {
        type: ADD_FEED,
        feedUrl,
    };
}

export function addFeedSucces() {
    return {
        type: ADD_FEED_SUCCESS,
    };
}

export function addFeedError(error) {
    return {
        type: ADD_FEED_ERROR,
        error,
    };
}

