/**
*
* AddFeed
*
*/

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import { TextField } from 'redux-form-material-ui'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import { makeSelectAddFeedLoading, makeSelectAddFeedError } from './selectors';
import { addFeed } from './actions';

import RaisedButton from 'material-ui/RaisedButton'

function ValidURL(str) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(str);
}

const required = value => value == null ? <FormattedMessage {...messages.required} /> : undefined
const validUrl = value => value && ValidURL(value) ? undefined : <FormattedMessage {...messages.invalidUrl} />

class AddFeed extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { handleSubmit, onAddFeed, loading, error } = this.props;
    return (
    <form onSubmit={handleSubmit(onAddFeed)} >
    <div>
        <Field component={TextField} name="url" type="text"
            validate={[ validUrl ]}
            floatingLabelText={<FormattedMessage {...messages.addFeed} />}
            hintText={<FormattedMessage {...messages.addFeed} />} />
        <RaisedButton type="submit" disabled={this.props.submitting} label={<FormattedMessage {...messages.submit} />} primary
        />
      </div>
    </form>
    );
  }
}

AddFeed.propTypes = {
    handleSubmit: React.PropTypes.func.isRequired, // reduxForm
    onAddFeed: React.PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
    return {
      onAddFeed: (data) => dispatch(addFeed(data)),
    };
}

const mapStateToProps = createStructuredSelector({
    loading: makeSelectAddFeedLoading(),
    error: makeSelectAddFeedError(),
});

const form = reduxForm({
    form: 'addFeed',
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(form(AddFeed));
