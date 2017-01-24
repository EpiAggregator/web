/*
 *
 * SettingsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSettingsPage from './selectors';
import messages from './messages';

import styled from 'styled-components';

import LocaleToggle from 'containers/LocaleToggle';

const Center = styled.div`
width: 50%;
margin: 0 auto;
`;

export class SettingsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Center>
        <LocaleToggle />
      </Center>
    );
  }
}

SettingsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SettingsPage: makeSelectSettingsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
