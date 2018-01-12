import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class GRAT extends Component {
  render() {
    const tableHead1 = ['Maintenance Risk Assessment']
    const tableData1 = [
      ['1', 'Completed By: Maintenance Manager', '1'],['2', 'Completed By: Technician', '1'],['3', 'Completed By: Other', '3'],['Total Factor Score: ']
    ]
    const tableHead2 = ['General Outlook']
    const tableData2 = [
      ['4', 'Activity Type: Aircraft Maintenance', '5'],['5', 'Activity Type: Hangar Maintenance', '2'],['6', 'Activity Type: Lack of Time Available', '5'],['7', 'Activity Type: Concurrent Activities', '3'],['8', 'Weather/Enviornment/Todays Forecast: Working Temps in 90F+', '4'],['9', 'Weather/Enviornment/Todays Forecast: Thunderstorm Activity', '3'],['10', 'Weather/Enviornment/Todays Forecast: High Winds', '4'],['11', 'Weather/Enviornment/Todays Forecast: Wet/Rain', '3'],['12', 'Weather/Enviornment/Todays Forecast: Snow', '5'],['13', 'Weather/Enviornment/Todays Forecast: Ice', '8'],['14', 'Weather/Enviornment/Todays Forecast: Working in Temps Below 32F', '5'],['Total Factor Score: ']
    ]
    const tableHead3 = ['Human Factors']
    const tableData3 = [
      ['15', 'Scheduled Duty Time: 8 or Less Hours', '2'],['16', 'Scheduled Duty Time: 8-10 Hours', '4'],['17', 'Scheduled Duty Time: 10-12 Hours', '6'],['18', 'Scheduled Duty Time: Over 12 Hours', '8'],['19', 'Any Work in Time Period 2300-0600: Local Time', '4'],['20', 'Off-Duty Rest: 8 or Less Hours', '6'],['21', 'Off-Duty Rest: 8-12 Hours', '3'],['22', 'Off-Duty Rest: 12+ Hours', '1'],['23', 'Working Alone: Yes', '10'],['24', 'Working Alone: Emergency Notification Procedure', '-4'],['25', 'Contract Maintenance Personnel: Yes', '6'],['26', 'Contract Maintenance Personnel: Hangar/Activity Briefing', '-3'],['27', '	Personnel Health(Anyone/Everyone): Good', '-1'],['28', 'Personnel Health(Anyone/Everyone): Minor Sickness', '2'],['29', 'Personnel Health(Anyone/Everyone): Emotional/ Family Concerns', '5'],['30', 'Personnel Health(Anyone/Everyone): Other/ Serious', '7'],['Total Factor Score: ']
    ]

    const tableHead4 = ['General Conditions/ Activities']
    const tableData4 = [
        ['31', 'First Aid Kit: Available', '-2'],['32', 'AED: Available', '-2'],['33', 'Progtective Clothing/Equipment: Available/Used', '-1'],['34', 'Lockout/ Blockout Procedures: Used', '-1'],['35', 'Welding, Cutting and Brazing: Yes', '3'],['36','Use of Compressed Gas: Yes', '3'],['37', 'Use of Hoist Equipment: Yes', '3'],['38', 'Use of Industrial Trucks/ Equip: Yes', '3'],['39', 'Entering Confined Spaces: Yes', '5'],['40', 'Use of Flammable/ Combustible Materials: Yes', '3'],['41', 'Use of Hazardous Checmicals: Yes', '3'],['42', 'Work in High Noise (85dBA+) Areas: Yes', '3'],['Total Factor Score: ']
    ]

    const tableHead5 = ['Aircraft Maintenance Activity']
    const tableData5 = [
        ['43', 'Technical Data Reviewed', '-3'],['44', 'Servicing: Fuel', '3'],['45', 'Servicing: Oxygen', '3'],['46', 'Servicing: Tire Inflation', '5'],['47', 'Maintenance: Pre-Flight/ Post Flight', '2'],['48', 'Maintenance: Scheduled Inspections', '2'],['49', 'Maintenance: Unscheduled Maintenance', '4'],['50', 'Tasks Involving: Opening Panels', '2'],['51', 'Tasks Involving: Electrical Systems', '2'],['52', 'Tasks Involving: Fuel System', '4'],['53', 'Tasks Involving: Engines/ APU', '2'],['54', 'Tasks Involving: Hydraulics', '6'],['55', 'Tasks Involving: Pneumatics', '3'],['56', 'ools and Equipment: Use of Work Platforms', '2'],['57', 'Tools and Equipment: Use of Ladders', '4'],['58', 'Tools and Equipment: Use Safety Harness', '-4'],['59', 'Work Inspected: By Peer', '1'],['60', 'Work Inspected: No', '3'],['61', 'Aircraft Towing: Yes', '5'],['62', 'Aircraft Towing: Wing Walker(s)', '-4'],['63', 'Aircraft Jacking: Yes', '5'],['Total Factor Score: ']
    ]

    const tableHead6 = ['Ramp, Hangar and Tools']
    const tableData6 = [
        ['64', 'Trip Support: Passenger Boarding/ Deplaning', '2'],['65', 'Trip Support: Baggage Handling', '4'],['66', 'Trip Support: Cargo Handling', '4'],['67', 'Ramp Area/AOA: Clear/ Company Aircraft Only', '-2'],['68', 'Ramp Area/AOA: Aircraft Movement under own Power', '2'],['69', 'Ramp Area/AOA: Service Vehicle Activity', '2'],['70', 'Ramp Area/AOA: Passenger Vehicle Activity', '3'],['71', 'Hanger: Clear/ Clean', '1'],['72', 'Hanger: 1 Aircraft', '3'],['73', 'Hanger: 2+ Aircraft', '5'],['74', 'Hanger: Other Obstructions', '3'],['75', 'Hanger: Fall/ Slip Hazards', '4'],['76', 'Ground Service Equipment: Inspected/ Safe', '-2'],['77', 'Ground Service Equipment: GPU Cart/ Cords in Use', '2'],['78', 'Ground Service Equipment: Hyd Cart/ Cords in Use', '4'],['79', 'Power Tools: Trained in Use', '-3'],['80', 'Power Tools: Guards/ Protection Installed/ Used', '-2'],['81', 'Power Tools: Used Outside of Shop', '4'],['Total Factor Score: ']
    ]
    return (
      <ScrollView style={styles.container}>
        <Text>Flight Risk Anaylsis Tool</Text>
        <Text>Template Name: Coastal Helicopters Fire</Text>
          <Table>
            <Row data={tableHead1} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData1} flexArr={[1,10,1]} style={styles.tableRow} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead2} style={styles.title}  />
            <TableWrapper>
              <Rows data={tableData2} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead3} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData3} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead4} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData4} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead5} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData5} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead6} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData6} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
	container: {
      padding: 20,
      marginBottom: 50
  },
  title: {
    backgroundColor: '#9EBEF2'
  }
});

AppRegistry.registerComponent('GRAT', () => GRAT);