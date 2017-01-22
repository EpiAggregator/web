/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function idToLocal(id) {
  return appLocales[id];
}

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onChange(evt, idx, value) {
    return this.props.onLocaleToggle(evt, idx, idToLocal(value));
  }

  render() {
    let localId = appLocales.indexOf(this.props.locale);
    let content = appLocales.map((lang, i) => <MenuItem key={i} value={i} primaryText={<FormattedMessage  {...messages[lang]} />} />);
    return (
      <SelectField value={localId} floatingLabelText={<FormattedMessage {...messages.chooselanguage} />} onChange={this.onChange.bind(this)}>
        {content}
      </SelectField>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: React.PropTypes.func,
  locale: React.PropTypes.string,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt, idx, value) => dispatch(changeLocale(value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
