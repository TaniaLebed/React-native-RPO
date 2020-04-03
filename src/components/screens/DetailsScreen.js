import React, {PureComponent} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import HeaderView from '../HeaderView';
import ImageBigCard from '../ImageBigCardView';

export default class DetailsScreen extends PureComponent {
  render() {
    const {show, connection} = this.props.navigation.state.params;
    const {image, name, summary} = show;
    const {navigation} = this.props;
    const data = {image, name};
    return (
      <View style={styles.container}>
        <HeaderView detail title={name} onPress={() => navigation.goBack()} />
        <ScrollView>
          <View style={styles.sub}>
            <ImageBigCard data={data} connection={connection} />
            <Text style={styles.title}>{name.toUpperCase()}</Text>
            <Text style={styles.text}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'AvenirNext-DemiBold',
    backgroundColor: '#fff',
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    padding: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15,
  },
});
