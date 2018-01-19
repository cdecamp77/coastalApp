import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class Hazard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      text: ''
    }
  }
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Submit a potential hazard report</Text>
        <TextInput 
          style={styles.hazardInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'This is a hazard'}
        />
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
  },
  hazardInput: {
    height: 50,
    backgroundColor: 'lightblue'
  }
  });

AppRegistry.registerComponent('Hazard', () => Hazard);