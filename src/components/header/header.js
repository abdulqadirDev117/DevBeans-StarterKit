import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {COLOR} from '@config';
import {Text, SearchBar, Link} from '../';
import styles from './header.style';

let Header = props => {
  // const { t } = props;
  let inputRef;

  const onPressCancelSearch = () => {
    // this.inputRef.clear();
    inputRef.blur();
    props.onPressCancelSearch && props.onPressCancelSearch();
  };

  return (
    <View
      style={[styles.container, props.hideShadow ? undefined : styles.shadow]}>
      {!props.hideTitle ? <View style={styles.topSpace} /> : null}
      <View style={{flexDirection: 'row', padding: 10}}>
        {props.leftIconName || props.rightButtonText ? (
          <View style={styles.buttonsContainer}>
            {props.leftIconName ? (
              <TouchableOpacity
                onPress={() =>
                  props.onLeftButtonPress && props.onLeftButtonPress()
                }>
                <View style={styles.leftIconView}>
                  <Icon
                    name={props.leftIconName}
                    size={19}
                    color={COLOR.HEADER_ICON}
                    style={styles.leftIcon}
                  />
                </View>
              </TouchableOpacity>
            ) : null}

            {}
          </View>
        ) : null}
        <View style={styles.buttonsSpace} />

        {!props.hideTitle && props.title ? (
          <Text
            scale
            style={[
              styles.title,
              props.smallTitle ? styles.smallTitle : undefined,
            ]}>
            {props.title}
          </Text>
        ) : null}
        <View style={styles.buttonsSpace} />
      </View>

      {props.searchBar ? (
        <View style={styles.searchBarContainer}>
          <SearchBar
            containerStyle={styles.searchInputContainer}
            getInputRef={ref => {
              inputRef = ref;
            }}
            {...props.searchInputProps}
          />
          {props.saveIcon ? (
            <View style={styles.searchBarRightButtons}>
              <TouchableOpacity
                onPress={() =>
                  props.onsaveIconPress && props.onsaveIconPress()
                }>
                <View
                  style={{
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: 'white',
                    padding: 10,
                  }}>
                  <Icon
                    name={'heart'}
                    size={15}
                    color={'white'}
                    // style={styles.leftIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : null}
          {props.addEventIcon ? (
            <View style={styles.searchBarRightButtons}>
              <TouchableOpacity
                onPress={() =>
                  props.onAddEventPress && props.onAddEventPress()
                }>
                <View
                  style={{
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: 'white',
                    padding: 10,
                  }}>
                  <Icon
                    name={'plus'}
                    size={15}
                    color={'white'}
                    // style={styles.leftIcon}
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : null}

          {/* {props.showCancelSearchButton ? (
            <View style={styles.cancelButtonContainer}>
              <Link
                primary
                text={"headerActionButtons.cancelSearch"}
                onPress={onPressCancelSearch}
              />
            </View>
          ) : null} */}
        </View>
      ) : null}
    </View>
  );
};

// Header = withTranslation()(Header);

export {Header};
