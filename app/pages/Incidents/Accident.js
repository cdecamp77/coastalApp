import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class Accident extends Component {
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image flexArr={[12]} source={require('../../assets/CoastalLogo.png')} />
        <Text>Submit an accident report</Text>
        <TextInput />
        <Button title="Submit" onPress={() => navigate('Hazard')}  />
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

AppRegistry.registerComponent('Accident', () => Accident);