import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator'
// import RootPage from '../RootPage/RootPage'

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
    };
    }
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
            <Image style={styles.image} source={require('../../assets/CoastalLogo.png')}></Image>
        </View>
        <TextInput 
            style={{height: 25, borderColor: 'gray', borderWidth: 1}}
            placeholder={'Email'}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})} />
        <TextInput 
            style={{height: 25, borderColor: 'gray', borderWidth: 1}} 
            placeholder={'Password'}
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
        alignItems: 'center',
        width: 350,
        height: 100
    }
  });

AppRegistry.registerComponent('Landing', () => Landing);