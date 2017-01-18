/**
*
* LocaleToggle
*
*/

import React from 'react';

import Select from './Select';
import ToggleOption from '../ToggleOption';

import SelectField from 'material-ui/SelectField';

class SelectFieldWrapper extends React.Component{
    onChange(evt, index, value) {
        if (this.props.onChange) {
            this.props.onChange(value);
        }
    }
    render() {
        return (
            <SelectField {...this.props} onChange={this.onChange.bind(this)}>
            {this.props.children}
            </SelectField>
        );
    }
}

function Toggle(props) {
  let content = (<option>--</option>);

  // If we have items, render them
  let i = 0;
  if (props.values) {
    content = props.values.map((value) => {
        ++i;
        return (
          <ToggleOption key={i} value={i} message={props.messages[value]} />
        );
    });
  }
  let k = 1;
  return (
    <SelectFieldWrapper floatingLabelText={props.label} value={k} onChange={props.onToggle} autoWidth={true} >
      {content}
    </SelectFieldWrapper>
  );
}

Toggle.propTypes = {
  onToggle: React.PropTypes.func,
  values: React.PropTypes.array,
  value: React.PropTypes.string,
  messages: React.PropTypes.object,
  label: React.PropTypes.object,
};

export default Toggle;
