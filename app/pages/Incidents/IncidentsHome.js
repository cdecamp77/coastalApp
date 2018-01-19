import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class IncidentsHome extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image flexArr={[12]} source={require('../../assets/CoastalLogo.png')} />
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
        flex: 1,
        resizeMode: 'contain',
    }
  });

AppRegistry.registerComponent('IncidentsHome', () => IncidentsHome);