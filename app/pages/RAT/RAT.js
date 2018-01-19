import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';

export default class RAT extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/CoastalLogo.png')} />
            <Text style={styles.h1}>Risk Analysis Tools</Text>
            <Button style={styles.button}  onPress={() => navigate('FRAT')} title="Flight Risk Analysis Tool" />
            <Button style={styles.button}  onPress={() => navigate('GRAT')} title="Ground Risk Analysis Tool" />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'lightgrey'
    },
    h1: {
        fontSize: 25,
        textAlign: 'center',
        margin: 25
    },
    button: {
        margin: 10,
        width: 260,
        backgroundColor: '#2196F3'
    },
    image: {
        width: 350,
        height: 100
    }
});

AppRegistry.registerComponent('RAT', () => RAT);