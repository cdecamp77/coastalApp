import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/CoastalLogo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#abcdef'
  },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }
  });

AppRegistry.registerComponent('Landing', () => Landing);