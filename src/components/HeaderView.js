import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({detail, title, onPress}) => {
  return (
    <View style={styles.viewStyle}>
      {detail && (
        <TouchableOpacity onPress={onPress}>
          <Icon
            name="angle-left"
            style={[styles.leftButtonStyle, {paddingLeft: detail ? 15 : 0}]}
          />
        </TouchableOpacity>
      )}
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles.textStyle, {paddingLeft: detail ? 15 : 0}]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingLeft: 20,
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: 390,
    fontFamily: 'AvenirNext-DemiBold',
  },
  leftButtonStyle: {
    fontSize: 50,
    color: '#fff',
  },
});

export default Header;
