import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class FRAT extends Component {
  render() {
    const tableHead1 = ['Pilot Qualifications / Experience / Duty Time']
    const tableData1 = [
      ['1', 'PIC with less than 200 hours in type', '3'],['2', 'PIC greater than 500 hours in type', '-3'],['3', 'Dual Pilot Training', '2'],['4', 'Duty time greater than 10 hours', '2'],['Total Factor Score: ']
    ]
    const tableHead2 = ['Operating Environment']
    const tableData2 = [
      ['5', 'Surface winds greater than 30 knots', '3'],['6', 'Surface winds greater than 20 knots', '2'],['7', 'Departure/arrival into mountainous terrain', '3'],['8', 'Ceiling > 3,000FT Visibility > 3SM', '-3'],['9', 'Smoke/Haze/Fog', '5'],['10', 'Convective activity', '5'],['11', 'Use of Pre-Designated LZs', '-1'],['12', 'LZ area with multiple obstacles', '2'],['13', 'Unimproved landing site', '3'],['Total Factor Score: ']
    ]
    const tableHead3 = ['Mission Requirements']
    const tableData3 = [
      ['14', 'Long line mission', '3'],['15', 'Belly bucket mission', '1'],['16', 'Belly hook mission', '2'],['17', 'Short haul mission', '4'],['18', '90% of allowable payload', '3'],['Total Factor Score: ']
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
	container: {
  	padding: 20
  },
  title: {
    backgroundColor: '#9EBEF2'
  },
  tableRow: {

  }
});

AppRegistry.registerComponent('FRAT', () => FRAT);