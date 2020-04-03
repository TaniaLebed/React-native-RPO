import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageBigCard = ({data, connection}) => {
  const {image} = data;
  return (
    <View style={styles.container}>
      {connection ? (
        <Image style={styles.image} source={{uri: image.original}} />
      ) : (
        <View style={styles.noImage}>
          <Icon name="image" style={styles.noImageIcon} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  image: {
    borderRadius: 10,
    width: 260,
    height: 390,
  },
  noImage: {
    width: 260,
    height: 390,
    borderRadius: 10,
    backgroundColor: '#d9d9d9',
  },
  noImageIcon: {
    fontSize: 80,
    paddingLeft: 88,
    paddingTop: 150,
  },
});

export default ImageBigCard;
