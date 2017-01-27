/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectFeedsList, makeSelectFeedsLoading, makeSelectFeedsError,
         makeSelectEntriesList, makeSelectEntriesLoading, makeSelectEntriesError
} from './selectors';
import { loadFeedsList, loadFeedsEntries, favEntry, readEntry } from './actions';

import RaisedButton from 'material-ui/RaisedButton'

import CenterDiv from 'components/CenterDiv';
import AddFeed from 'containers/AddFeed';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import FeedsList from 'components/FeedsList';
import FeedEntries from 'components/FeedEntries';

import styled from 'styled-components';

const StyleBlockLeft = styled.div`
float: left;
width: 30%;
display: block;
`;

const StyleBlockRight = styled.div`
margin-left: 30%;
margin-top: 30px;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.onMount();
  }

  render() {
      const { feedsLoading, feedsError, feedsList, entriesLoading, entriesError, entriesList } = this.props;
    const feedsListProps = {
        loading: feedsLoading,
        error: feedsError,
        feedsList: feedsList,
        onSelect: this.props.onChangeFeed,
    };
    const entriesListProps = {
        loading: entriesLoading,
        error: entriesError,
        feedsEntries: entriesList,
        onRead: this.props.onReadEntry,
        onFav: this.props.onFavEntry,
    };

    const allEntries = () => this.props.loadEntries('all');

    return (
      <article>
        <Helmet
          title="EpiAgreggator"
          meta={[
            { name: 'description', content: 'An epic rss reader' },
          ]}
        />
        <div>
        <CenterDiv>
          <AddFeed />
        </CenterDiv>
        <StyleBlockLeft>
        <CenterDiv>
        <RaisedButton type="button" onTouchTap={this.props.onChangeFeed.bind(null, null)} label={<FormattedMessage {...messages.allFeeds} />} primary />
        </CenterDiv>
           <FeedsList {...feedsListProps} />
        </StyleBlockLeft>
        </div>
        <StyleBlockRight>
           <FeedEntries {...entriesListProps} />
        </StyleBlockRight>
      </article>
    );
  }
}

HomePage.propTypes = {
    onMount: React.PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
      onMount: (evt) => dispatch(loadFeedsList()),
      onChangeFeed: (id) => dispatch(loadFeedsEntries(id)),
      onChangeEntry: (id) => dispatch(loadFeedsEntries(id)),
      onReadEntry: (id) => dispatch(readEntry(id)),
      onFavEntry: (id) => dispatch(favEntry(id)),
    };
}

const mapStateToProps = createStructuredSelector({
    feedsList: makeSelectFeedsList(),
    feedsLoading: makeSelectFeedsLoading(),
    feedsError: makeSelectFeedsError(),
    entriesList: makeSelectEntriesList(),
    entriesLoading: makeSelectEntriesLoading(),
    entriesError: makeSelectEntriesError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
