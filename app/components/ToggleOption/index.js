/**
*
* ToggleOption
*
*/

import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import MenuItem from 'material-ui/MenuItem';

const ToggleOption = ({ value, message, intl }) => (
  <MenuItem value={value} primaryText={message ? intl.formatMessage(message) : value} />
);

ToggleOption.propTypes = {
  value: React.PropTypes.string.isRequired,
  message: React.PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);
