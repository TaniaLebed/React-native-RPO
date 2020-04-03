import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ImageCard = ({data, connection, onPress}) => {
  const {image, name} = data;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image.medium}} />
        <Text style={styles.h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    paddingVertical: 10,
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  image: {
    width: 180,
    height: 270,
    borderRadius: 10,
  },
});

export default ImageCard;
