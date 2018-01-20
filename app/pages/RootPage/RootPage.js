import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class RootPage extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/CoastalLogo.png')} />
        <Text style={styles.h1} >Coastal Helicopter SMS</Text>
        <Button title="Risk Analysis" onPress={() => navigate('RAT')} />
        <Button title="IEP Manager" onPress={() => navigate('IEPManager')} />
        <Button title="Incident Reporting" onPress={() => navigate('IncidentsHome')} /> 
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
        width: 350,
        height: 100,
    },
    h1: {
        fontSize: 25,
        textAlign: 'center',
        padding: 5
    }
  });

AppRegistry.registerComponent('RootPage', () => RootPage);