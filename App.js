import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class coastalApp extends Component {
  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('coastalApp', () => coastalApp);