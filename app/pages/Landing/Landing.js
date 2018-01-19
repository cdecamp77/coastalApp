import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator'
// import RootPage from '../RootPage/RootPage'

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: 'Email address',
            password: 'Password'
    };
    }
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image flexArr={[12]} source={require('../../assets/CoastalLogo.png')} />
        <TextInput 
            style={{height: 25, borderColor: 'gray', borderWidth: 1}} 
            value={this.state.email}
            onChangeText={(email) => this.setState({email})} />
        <TextInput 
            style={{height: 25, borderColor: 'gray', borderWidth: 1}} 
            value={this.state.password} 
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true} />
        <Button title="Log In" onPress={() => navigate('RootPage')} />
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

AppRegistry.registerComponent('Landing', () => Landing);