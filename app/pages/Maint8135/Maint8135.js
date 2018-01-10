import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Maint8 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are all maintenance records audited internally at an adequate frequency to ensure compliance with regulatory and manufacturer requirements? (FAR 135.439; IS-BAO 9.1.9; ARGUS Platinum 4.7.1; NBAA Management Guide 4.14.1.5)'],['2', 'Assess the quality of all maintenance record audits. Are all pertinent aircraft inspection and compliance documents evaluated? (ARGUS Platinum 4.7.2)'], ['3', 'Are maintenance records consistently kept organized and well maintained? (FAR 135.439c; ARGUS Platinum 4.7.3; NBAA Management Guide 4.14.4)'], ['4', 'Evaluate the maintenance aircraft release process in action. This process must follow the procedures contained in company manuals. (FAR 135.427b[9]; IS-BAO 9.1.7; ARGUS Platinum 4.6.5; NBAA Management Guide 4.12.1)'], ['5', 'Are maintenance records kept in a secure location? Is access limited to the appropriate personnel?  (ARGUS Platinum 4.7.3; IS-BAO IG 9.3.2[4&5])'], ['6', 'Is the operation’s maintenance inspection program identified in aircraft logbooks?  (FAR 135.443; ARGUS Platinum 4.4.1; NBAA Management Guide 4.12.3)'], ['7', 'Are all aircraft record management procedures described adequately in the GOM/GMM? (IS-BAO 9.1.4; NBAA Management Guide 4.14.1.5)'], ['8', 'Does the GOM/GMM describe procedures for maintenance vendors to sign off repairs or inspections IAW operator specific requirements, airworthiness program (AAIP) and FAR 43.9 & 43.11? (FAR 43.9, 43.11; IS-BAO 9.1.4; ARGUS Platinum 4.3.5; NBAA Management Guide 4.16)'], ['9', 'Is documentation supporting the aircraft operational empty weight current and show evidence of being consistently maintained throughout all aircraft and equipment changes and modifications? (FAA AC 120-27E; IS-BAO 9.1.4h)'], ['10', 'Is there proper oversight of information entered into the organization’s maintenance tracking system? (IS-BAO 9.1.7d; NBAA Management Guide 4.14.4)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Maint 8 - Records 2016 (Part 135)</Text>
        <View>
            <Table>
                <Row data={tableHead} style={styles.maint6Title} textStyle={{color:'black'}} flexArr={[1,11]} />
                <TableWrapper>
                    <ScrollView>
                        <Rows data={tableData} flexArr={[1,11]} style={styles.row} textStyle={styles.text}/>
                    </ScrollView>
                </TableWrapper>
            </Table>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'lightgrey',
        padding: 20,
    },
    maint6Title: {
        backgroundColor: '#9EBEF2',
    },
    text: { 
        marginLeft: 5,
        flexWrap: 'wrap',
        flexGrow: 1,
        padding: 4
    },
    row: { 
        height: 150,
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: '#F6F9FD'
    }
})

AppRegistry.registerComponent('Maint8', () => Maint8);