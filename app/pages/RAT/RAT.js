import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import GRAT from '../GRAT/GRAT'
import FRAT from '../FRAT/FRAT'


export default class RAT extends Component {

  render() {
       const { navigate } = this.props.navigation;
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Risk Analysis Tools</Text>
            <Button style={styles.button}  onPress={() => navigate('FRAT')} title="Flight Risk Analysis Tool" />
            <Button style={styles.button}  onPress={() => navigate('GRAT')} title="Ground Risk Analysis Tool"/>
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
    newChecklist: {
        fontSize: 18,
        backgroundColor: '#2196F3'
    }
});

AppRegistry.registerComponent('RAT', () => RAT);