import React from 'react';
import {View, StyleSheet} from 'react-native';

const Layout = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 150,
  },
});

export default Layout;
