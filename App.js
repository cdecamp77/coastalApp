import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
// import RootNavigator from './app/components/RootNavigator';
import Maint791 from './app/pages/Maint791/Maint791';
import RATNavigator from './app/components/RATNavigator';
import Landing from './app/pages/Landing/Landing';

export default class coastalApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RATNavigator />
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