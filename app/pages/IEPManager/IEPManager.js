import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

export default class IEPManager extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
            <Text style={styles.h1}>Internal Evaluation Program Manager</Text>
            <Text>New Checklists</Text>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>USFS - Exhibit 31 - SMS 2017</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>OPS 8-(RW) Aviation Life Support / Survival Equipment (2016)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 8- Cabin Crew and Service Reps Part 135 (2016)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 7- Flight Standards 2017 (Part 91)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 7- Flight Standards 2017 (Part 135)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 5- Pilot Hiring 2017 (part 91)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 5- Pilot Hiring 2017 (part 135)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Ops 1- Operations Management 2016 (Part 135)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Operations 6- Pilot Training Part 91 (2017)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Operations 6- Pilot Training Part 135 (2017)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 6- Control/Planning Part 91 (2017)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 5- Training 2017 (Part 91)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 5- Training 2017 (Part 135)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 4- Inspection Program Part 135 (2017)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maintenance 11- Hangar/Facilities (2016)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 8- Records 2016 (Part 135)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 7- Aircraft Condition 2017 (Part 91)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 7- Aircraft Condition 2017 (Part 135)</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Maint 6- Control/Planning Part 135 (2017)</Text>
                </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        alignItems: 'center',
        paddingTop: 30
    },
    h1: {
        fontSize: 25,
        textAlign: 'center',
        margin: 25
    },
    button: {
        marginBottom: 10,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    }
})

AppRegistry.registerComponent('IEPManager', () => IEPManager);