import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, Image} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';

export default class IEPManager extends Component {

  render() {
       const { navigate } = this.props.navigation;
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/CoastalLogo.png')}></Image>
            <Text style={styles.h1}>Internal Evaluation Program Manager</Text>
            <Text style={styles.newChecklist}>New Checklists</Text>
            <Button style={styles.button}  onPress={() => navigate('Ops8RW')} title="OPS 8-(RW) Aviation Life Support / Survival Equipment (2016)" />
            <Button style={styles.button}  onPress={() => navigate('Ops8135')} title="Ops 8- Cabin Crew and Service Reps Part 135 (2016)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops791')} title="Ops 7- Flight Standards 2017 (Part 91)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops7135')} title="Ops 7- Flight Standards 2017 (Part 135)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops591')} title="Ops 5- Pilot Hiring 2017 (part 91)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops5135')} title="Ops 5- Pilot Hiring 2017 (part 135)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops1135')} title="Ops 1- Operations Management 2016 (Part 135)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops691')} title="Operations 6- Pilot Training Part 91 (2017)"/>
            <Button style={styles.button}  onPress={() => navigate('Ops6135')} title="Operations 6- Pilot Training Part 135 (2017)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint691')} title="Maintenance 6- Control/Planning Part 91 (2017)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint591')} title="Maintenance 5- Training 2017 (Part 91)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint5135')} title="Maintenance 5- Training 2017 (Part 135)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint4135')} title="Maintenance 4- Inspection Program Part 135 (2017)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint11')} title="Maintenance 11- Hangar/Facilities (2016)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint8135')} title="Maintenance 8- Records 2016 (Part 135)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint791')} title="Maintenance 7- Aircraft Condition 2017 (Part 91)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint7135')} title="Maintenance 7- Aircraft Condition 2017 (Part 135)"/>
            <Button style={styles.button}  onPress={() => navigate('Maint6135')} title="Maint 6- Control/Planning Part 135 (2017)"/>
            <Button style={styles.button}  onPress={() => navigate('FRAT')} title="Flight Risk Anaylsis Tool"/>
            <Button style={styles.button}  onPress={() => navigate('GRAT')} title="Ground Risk Anaylsis Tool"/>
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
    },
    image: {
        width: 350,
        height: 100
    }
});

AppRegistry.registerComponent('IEPManager', () => IEPManager);