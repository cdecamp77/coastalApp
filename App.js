import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import RootNavigator from './app/components/RootNavigator';

export default class coastalApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abcdef'
  }
  });

AppRegistry.registerComponent('coastalApp', () => coastalApp);