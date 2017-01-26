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

import { login } from 'containers/App/actions';

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
          <LoginForm onSubmit={this.props.onLogin} locale={this.props.locale} />
      </CenterDiv>
      </section>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    onLogin: (data) => dispatch(login(data)),
  };
}

export default connect(null, mapDispatchToProps)(LoginPage);
