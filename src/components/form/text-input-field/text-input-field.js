import React, {Component} from 'react';
import {TextInput} from '../../';

class TextInputField extends Component {
  render() {
    const {meta, input, refName, ...rest} = this.props;

    return (
      <TextInput
        ref={refName}
        onChangeText={value => input.onChange(value)}
        value={input.value}
        error={meta.touched && meta.error}
        {...rest}
      />
    );
  }
}

export {TextInputField};
