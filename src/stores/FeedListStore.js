import alt from '../alt';

import FeedListActions from '../actions/FeedListActions'

export default alt.createStore(
    class FeedListStore {
        constructor() {
            this.feeds = [];
            this.loaded = false;
            this.errorMessage = null;

            this.bindListeners({
                onFetchFeeds: FeedListActions.FETCH_FEEDS,
                onfetchFeedsSuccess: FeedListActions.FETCH_FEEDS_SUCCESS,
                onfetchFeedsFailed: FeedListActions.FETCH_FEEDS_FAILED
            });
        }

        onFetchFeeds() {
            console.log('Fetching feed list');
        }

        onfetchFeedsSuccess(feeds) {
            console.log('Feed fetched successfully: ');
            this.loaded = true;
            if (feeds instanceof Array) {
                this.feeds = feeds;
                this.errorMessage = null;
            } else {
                this.errorMessage = "Response isn't a json Array";
            }
        }

        onfetchFeedsFailed(err) {
            this.errorMessage = err;
            this.loaded = false;
            console.error('Error while fetching feeds: ' + err);
        }

    }
);
