/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectFeedsList, makeSelectLoading, makeSelectError } from './selectors';
import { loadFeedsList } from './actions';

import styled from 'styled-components';

import FeedsList from 'components/FeedsList';

import AddFeed from 'containers/AddFeed';

const Center = styled.div`
width: 50%;
margin: 0 auto;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { loading, error, feedsList } = this.props;
    const feedsListProps = {
        loading,
        error,
        feedsList,
    };
    return (
      <article>
        <Helmet
          title="EpiAgreggator"
          meta={[
            { name: 'description', content: 'An epic rss reader' },
          ]}
        />
        <div>
        <Center>
          <AddFeed />
        </Center>
        <FeedsList {...feedsListProps} />
        </div>
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
    };
}

const mapStateToProps = createStructuredSelector({
    feedsList: makeSelectFeedsList(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
