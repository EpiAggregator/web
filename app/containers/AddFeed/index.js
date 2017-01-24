/**
*
* AddFeed
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { reducer as formReducer } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RaisedButton from 'material-ui/RaisedButton'

function ValidURL(str) {
    var pattern = new RegExp('^(https?:\/\/)?'+ // protocol
    '((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|'+ // domain name
    '((\d{1,3}\.){3}\d{1,3}))'+ // OR ip (v4) address
    '(\:\d+)?(\/[-a-z\d%_.~+]*)*'+ // port and path
    '(\?[;&a-z\d%_.~+=-]*)?'+ // query string
    '(\#[-a-z\d_]*)?$','i'); // fragment locater
    if(!pattern.test(str)) {
        alert("Please enter a valid URL.");
        return false;
    } else {
        return true;
    }
}

const required = value => value == null ? <FormattedMessage {...messages.required} /> : undefined
const validUrl = value => value && ValidURL(value) ? <FormattedMessage {...messages.invalidUrl} /> : undefined

class AddFeed extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form>
      <div>
        <Field component={TextField} name="url"
            validate={[ validUrl ]}
            format={ (s) => s }
            floatingLabelText={<FormattedMessage {...messages.addFeed} />}
            hintText={<FormattedMessage {...messages.addFeed} />} />
            <RaisedButton label={<FormattedMessage {...messages.submit} />} primary
        />
      </div>
      </form>
    );
  }
}

AddFeed.propTypes = {

};

export function mapDispatchToProps(dispatch) {
    return {
    };
}

const mapStateToProps = createStructuredSelector({
});

const form = reduxForm({
    form: 'addFeed',
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(form(AddFeed));
