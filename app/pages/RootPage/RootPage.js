import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class RootPage extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image flexArr={[12]} source={require('../../assets/CoastalLogo.png')} />
        <Button title="Risk Analysis" onPress={() => navigate('RAT')}  />
        <Button title="IEP Manager" onPress={() => navigate('IEPManager')}  />
         <Button title="Incident Reporting" onPress={() => navigate('IncidentsHome')}  /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 20,
    backgroundColor: '#abcdef'
  },
    image: {
        flex: 1,
        resizeMode: 'contain',
    }
  });

AppRegistry.registerComponent('RootPage', () => RootPage);