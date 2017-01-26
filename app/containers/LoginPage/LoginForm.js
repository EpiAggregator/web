import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import messages from './messages';
import { FormattedMessage } from 'react-intl';

import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

const LoginForm = (props) => {
  const { error, handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="email" type="email" component={TextField} floatingLabelText={<FormattedMessage {...messages.email} />} />
      </div>

      <div className="form-group">
        <Field name="password" type="password" component={TextField} floatingLabelText={<FormattedMessage {...messages.password} />} label="Password"/>
      </div>

      {/* Render error if any. */}
      {error && <strong>{error}</strong>}

      <div>
      <RaisedButton style={{float: 'left'}} type="button" disabled={submitting} ><FormattedMessage {...messages.register} /></RaisedButton>
      <RaisedButton type="submit" disabled={submitting}><FormattedMessage {...messages.login} /></RaisedButton>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)
