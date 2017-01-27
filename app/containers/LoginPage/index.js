/*
 *
 * LoginPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import LoginForm from './LoginForm'

import Snackbar from 'material-ui/Snackbar';

import messages from './messages';
import { FormattedMessage } from 'react-intl';

import { login, register } from 'containers/App/actions';
import { makeSelectLoginError, makeSelectRegisterError, makeSelectRegisterSuccess } from 'containers/App/selectors';

import CenterDiv from 'components/CenterDiv';

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section>
      <CenterDiv>
          <Helmet
            title="LoginPage"
            meta={[
              { name: 'description', content: 'Login Page' },
            ]}
          />
          <LoginForm onLogin={this.props.onLogin} onRegister={this.props.onRegister} locale={this.props.locale} />
      </CenterDiv>
      <div>
      <Snackbar
        open={this.props.loginError}
        message={<FormattedMessage {...messages.loginError} />}
        autoHideDuration={4000}
      />
      <Snackbar
        open={this.props.registerSuccess}
        message={<FormattedMessage {...messages.registerSuccess} />}
        autoHideDuration={4000}
      />
      <Snackbar
        open={this.props.registerError}
        message={<FormattedMessage {...messages.registerError} />}
        autoHideDuration={4000}
      />
      </div>
      </section>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onLogin: (data) => dispatch(login(data)),
    onRegister: (data) => dispatch(register(data)),
  };
}

const mapStateToProps = createStructuredSelector({
    loginError: makeSelectLoginError(),
    registerSuccess: makeSelectRegisterSuccess(),
    registerError: makeSelectRegisterError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
