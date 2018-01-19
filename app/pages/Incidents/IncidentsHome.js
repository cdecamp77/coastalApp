import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class IncidentsHome extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/CoastalLogo.png')} />
        <Button title="Hazard Risk Reporting" onPress={() => navigate('Hazard')}  />
        <Button title="Accident Risk Reporting" onPress={() => navigate('Accident')}  />
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
        height: 100
    }
  });

AppRegistry.registerComponent('IncidentsHome', () => IncidentsHome);