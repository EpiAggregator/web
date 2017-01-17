/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
  }

  render() {
    return (
      <article>
        <Helmet
          title="EpiAgreggator"
          meta={[
            { name: 'description', content: 'An epic rss reader' },
          ]}
        />
        <div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
};

export function mapDispatchToProps(/* dispatch */) {
  return {};
}

const mapStateToProps = createStructuredSelector({
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
