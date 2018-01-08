import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class FlightForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          This is the flight form
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
	text: {
  	color: 'white',
		backgroundColor: 'blue',
		margin:100
  }     
});

AppRegistry.registerComponent('FlightForm', () => FlightForm);