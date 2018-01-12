import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';

export default class IEPManager extends Component {
    _onPressButton() {
        navigate('Maint591');
    }

  render() {
       const { navigate } = this.props.navigation;
    return (
      <ScrollView style={{
            flex: 1,
            backgroundColor: '#ffffff'
            }}>
            
            <Text style={styles.h1}>Internal Evaluation Program Manager</Text>
            <Text style={styles.newChecklist}>New Checklists</Text>
            
            <Button onPress={() => navigate('Ops8RW')} title="OPS 8-(RW) Aviation Life Support / Survival Equipment (2016)">
            </Button>

            <Button onPress={() => navigate('Ops8135')} title="Ops 8- Cabin Crew and Service Reps Part 135 (2016)">
            </Button>

            <Button onPress={() => navigate('Ops791')} title="Ops 7- Flight Standards 2017 (Part 91)">
            </Button>

            <Button onPress={() => navigate('Ops7135')} title="Ops 7- Flight Standards 2017 (Part 135)">
            </Button>

            <Button onPress={() => navigate('Ops591')} title="Ops 5- Pilot Hiring 2017 (part 91)">
            </Button>

            <Button onPress={() => navigate('Ops5135')} title="Ops 5- Pilot Hiring 2017 (part 135)">
            </Button>

            <Button onPress={() => navigate('Ops1135')} title="Ops 1- Operations Management 2016 (Part 135)">
            </Button>

            <Button onPress={() => navigate('Ops691')} title="Operations 6- Pilot Training Part 91 (2017)">
            </Button>

            <Button onPress={() => navigate('Ops6135')} title="Operations 6- Pilot Training Part 135 (2017)">
            </Button>

            <Button onPress={() => navigate('Maint691')} title="Maintenance 6- Control/Planning Part 91 (2017)">
            </Button>

            <Button onPress={() => navigate('Maint591')} title="Maintenance 5- Training 2017 (Part 91)">
            </Button>

            <Button onPress={() => navigate('Maint5135')} title="">
            </Button>

            <Button onPress={() => navigate('Maint4135')} title="Maintenance 4- Inspection Program Part 135 (2017)">
            </Button>

            <Button onPress={() => navigate('Maint11')} title="Maintenance 11- Hangar/Facilities (2016)">
            </Button>

            <Button onPress={() => navigate('Maint8135')} title="Maintenance 8- Records 2016 (Part 135)">
            </Button>

            <Button onPress={() => navigate('Maint791')} title="Maintenance 7- Aircraft Condition 2017 (Part 91)">
            </Button>

            <Button onPress={() => navigate('Maint7135')} title="Maintenance 7- Aircraft Condition 2017 (Part 135)">
            </Button>
            
            <Button onPress={() => navigate('Maint6135')} title="Maint 6- Control/Planning Part 135 (2017)">
            </Button>

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
        margin: 10,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 10,
        color: 'white'
    },
    newChecklist: {
        fontSize: 18
    },
    newForms: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'lightgrey',
        padding: 5
    }
})

AppRegistry.registerComponent('IEPManager', () => IEPManager);