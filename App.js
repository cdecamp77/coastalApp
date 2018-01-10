import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Maint791 from './app/pages/Maint791/Maint791';

export default class coastalApp extends Component {
  render() {
    return (
      <View>
        <Maint791 />
      </View>
    );
  }
}

AppRegistry.registerComponent('coastalApp', () => coastalApp);