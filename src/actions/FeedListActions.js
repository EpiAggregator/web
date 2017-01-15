import alt from '../alt';

const API_ENDPOINT = '/feed';

export default alt.createActions(class FeedListActions {
    constructor() {
        this.generateActions(
            'fetchFeedsSuccess',
            'fetchFeedsFailed'
        );
    }

    fetchFeeds(apiBase) {
        let apiEndpoint = apiBase + API_ENDPOINT;
        return (dispatch) => {
            // we dispatch an event here so we can have "loading" state.
            dispatch();
            fetch(apiEndpoint)
            .then(response => response.json())
            .then( (feedList) => {
                // we can access other actions within our action through `this.actions`
                this.fetchFeedsSuccess(feedList);
            })
            .catch((errorMessage) => {
                this.fetchFeedsFailed(errorMessage);
            });
        }
    }
});
