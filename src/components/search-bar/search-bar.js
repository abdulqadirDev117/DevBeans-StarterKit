import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR} from '@config';
import styles from './search-bar.style';

const SearchBar = props => {
  const [value, setValue] = useState('');
  const {onChangeText, ...rest} = props;
  let inputRef;

  function clearInput() {
    inputRef.clear();
    setValue('');
  }

  function onChange(text) {
    setValue(text);
    onChangeText && onChangeText(text);
  }

  return (
    <View style={[styles.container, props.containerStyle]}>
      <Icon
        name="search"
        size={16}
        color={COLOR.SEARCH_BAR_ICON}
        style={styles.icon}
      />

      <TextInput
        style={styles.textInput}
        placeholderTextColor={COLOR.SEARCH_BAR_PLACEHOLDER}
        ref={ref => {
          inputRef = ref;
          props.getInputRef && props.getInputRef(inputRef);
        }}
        onChangeText={value => onChange(value)}
        {...rest}
      />

      {props.loading ? (
        <ActivityIndicator size="small" color="lightgrey" />
      ) : null}

      {value !== '' ? (
        <TouchableOpacity
          style={styles.clearButtonContainer}
          onPress={() => clearInput()}>
          <Icon
            name="times-circle"
            size={16}
            color={COLOR.SEARCH_BAR_ICON}
            style={styles.clearButtonIcon}
            solid
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export {SearchBar};
