import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import IEPManager from './app/pages/IEPManager/IEPManager';

export default class coastalApp extends Component {
  render() {
    return (
      <View>
        <IEPManager />
      </View>
    );
  }
}

AppRegistry.registerComponent('coastalApp', () => coastalApp);