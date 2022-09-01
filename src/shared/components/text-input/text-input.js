import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput as RNTextInput,
  Image,
} from 'react-native';
import {COLOR} from '@config';
import {Text} from '../';
import styles from './text-input.style';
import Icon from 'react-native-vector-icons/FontAwesome5';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      isSecureTextEntry: props.password,
    };
  }

  render() {
    const {
      error,
      password,
      label,
      value,
      iconName,
      hideErrorContainer,
      applyField,
      ...rest
    } = this.props;

    return (
      <View style={styles.container}>
        {label ? <Text style={styles.label}>{label}</Text> : null}

        <TouchableOpacity
          style={[
            styles.inputContainer,
            error ? styles.errorContainer : {},
            applyField ? styles.applyInputContainer : null,
          ]}
          onPress={() => this.inputRef.focus()}
          activeOpacity={1}>
          {iconName ? (
            <Icon
              name={this.props.iconName}
              size={21}
              solid
              color={'#818181'}
              style={styles.leftIcon}
            />
          ) : null}

          {applyField ? (
            <RNTextInput
              {...rest}
              ref={ref => {
                this.inputRef = ref;
              }}
              multiline
              style={[applyField ? styles.applyInput : styles.input]}
              value={value}
              onChangeText={this.props.onChangeText}
              placeholderTextColor={COLOR.TEXT_INPUT_PLACEHOLDER}
              secureTextEntry={this.state.isSecureTextEntry}
            />
          ) : (
            <RNTextInput
              {...rest}
              ref={ref => {
                this.inputRef = ref;
              }}
              style={styles.input}
              value={value}
              onChangeText={this.props.onChangeText}
              placeholderTextColor={COLOR.TEXT_INPUT_PLACEHOLDER}
              secureTextEntry={this.state.isSecureTextEntry}
            />
          )}

          {password ? (
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  isSecureTextEntry: !this.state.isSecureTextEntry,
                })
              }>
              {/* <Image source={require('@assets/images/eye-slash.png')} /> */}
            </TouchableOpacity>
          ) : null}
        </TouchableOpacity>

        {!hideErrorContainer ? (
          <View style={styles.errorMessageContainer}>
            <Text style={styles.errorMessage}>{error}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

export {TextInput};
