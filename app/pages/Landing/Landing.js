import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput, KeyboardAvoidingView, AsyncStorage, TouchableOpacity} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';
// import RootPage from '../RootPage/RootPage'

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
    };
    }

    componentDidMount() {
        this._loadInitialState().done(); 
    }

    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('RootPage');
        }
    }

  render() {
      const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/CoastalLogo.png')}></Image>
            <Text style={styles.header} >-  Login  -</Text>
        <TextInput
            style={styles.textInput}
            placeholder={'Email'}
            value={this.state.email}
            onChangeText={(email) => this.setState({email})} />
        <TextInput
            style={styles.textInput} 
            placeholder={'Password'}
            value={this.state.password} 
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true} />
        <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigate('RootPage')} >
            {/* onPress={this.login} > */}
            <Text>Log In</Text>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }

  login = () => {
      fetch('http://192.5454.25.2:3000/users', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: this.state.email,
              password: this.state.password
          })
      })

      .then((response) => response.json())
      .then((res) => {

        alert(res.message);
        if (res.success === true) {
            AsyncStorage.setItem('user', res.user);
            this.props.navigation.navigate('RootPage');
        } else {
            alert(res.message);
        }
      })
    .done();
  }

}

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        width: 350,
        height: 100
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgrey',
        paddingLeft: 40,
        paddingRight: 40
    },
    wrapper: {
        flex: 1
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center'
    }
  });

AppRegistry.registerComponent('Landing', () => Landing);