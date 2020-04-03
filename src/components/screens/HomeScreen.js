import React, {Component} from 'react';
import RNFS from 'react-native-fs';
import NetInfo from '@react-native-community/netinfo';
import {View, ScrollView} from 'react-native';
import HeaderView from '../HeaderView';
import ImageCardView from '../ImageCardView';
import Layout from '../Layout';

const url = 'http://api.tvmaze.com/search/shows?q=batman';
const path = RNFS.DocumentDirectoryPath + '/data.json';

export default class HomeScreen extends Component {
  state = {
    title: 'BATMAN',
    data: [],
    connection: null,
  };

  loadDataFromFile = async () => {
    return await RNFS.readFile(path, 'utf8');
  };

  componentDidMount = async () => {
    NetInfo.fetch().then(async state => {
      if (state.isConnected) {
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(result => {
            RNFS.writeFile(path, JSON.stringify(result), 'utf8');
            this.setState({data: result, connection: true});
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.loadDataFromFile()
          .then(res => {
            this.setState({data: JSON.parse(res), connection: false});
          })
          .catch(e => alert('You need Internet connection to load data'));
      }
    });
  };

  render() {
    const {title, data, connection} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <HeaderView title={title} />
        <ScrollView>
          <Layout>
            {data.map(item => (
              <ImageCardView
                data={item.show}
                connection={connection}
                key={item.show.id}
                onPress={() =>
                  navigation.navigate('Details', {
                    show: item.show,
                    connection: connection,
                  })
                }
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    );
  }
}
