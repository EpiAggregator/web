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

import { logout } from 'containers/App/actions';

import CenterDiv from 'components/CenterDiv';

import LocaleToggle from 'containers/LocaleToggle';
import RaisedButton from 'material-ui/RaisedButton'

export class SettingsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    <section>
        <CenterDiv>
        <Helmet
        title="SettingsPage"
        meta={[
            { name: 'description', content: 'Settings Page' },
        ]}
        />
        <div>
          <LocaleToggle />
          <RaisedButton style={{margin: '10px'}} type="button" onClick={this.props.askLogout} label={<FormattedMessage {...messages.logout} />} secondary
          />
        </div>
    </CenterDiv>
    </section>
    );
  }
}

SettingsPage.propTypes = {
  askLogout: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SettingsPage: makeSelectSettingsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    askLogout: (evt) => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
