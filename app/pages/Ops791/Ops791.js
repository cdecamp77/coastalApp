import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops791 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'During flight crew performance checks, are crewmembers evaluated for adherence to company standard operating procedures (SOPs)? (IS-BAO 6.1.2; NBAA Management Guide 2.4, 2.10)'],['2', 'Are separate SOPs developed and utilized for each aircraft type operated with two or more crew members? (IS-BAO 6.1.1)'], ['3', 'Do SOPs, training manuals, and checklists contain consistent terminology throughout and is the terminology aligned with IAW standard industry practices? (AC 120-71B)'], ['4', 'Do SOPs contain procedures and restrictions that enhance crew planning, coordination, and communication during airport surface operations? (AC 120-74B; IS-BAO IG 6.1; NBAA Management Guide 2.10)'], ['5', 'Do SOPs provide guidance on FMS inputs, cross-checks, and monitoring? (AC 120-71B; IS-BAO IG 6.1.1; NBAA Management Guide 2.10)'], ['6', 'Are company specific procedures/standards for the use of aircraft specific or specialized equipment adequately defined in published SOPs? (IS-BAO 5.1.3e, IG 5.1.3a(19), IG 5.1.3.4v; NBAA Management Guide 2.4 & 2.15)'], ['7', 'Do pilots generally agree that mandatory callouts, sterile cockpit, and other accepted CRM methods are understood and consistently practiced throughout flight operations? (FAR 91.1073; IS-BAO 5.2.1 & 6.1.1; NBAA Management Guide 2.4, 2.10)'], ['8', 'Does the flight standards program effectively interface with training requirements and planning? When significant change is planned, are flight standards reviewed? (IS-BAO 6.1.2; NBAA Management Guide 2.10)'], ['9', 'Are the procedures for aircraft surface contamination adequate, current, and descriptive for each aircraft type, as required? Do all flight crew members (to include CSAs) have a complete understanding of the procedures? (IS-BAO 6.2.10)'], ['10', 'Are crew member deficiencies and unintentional violations of a standard reported via an established method for determination of root cause and corrective action? (IS-BAO 3.2.2.a.2; NBAA Management Guide 1.3, 1.4)'], ['11', 'Are there standardized procedures in place for flight crews to supervise ground operations?  (IS-BAO IG 6.1)'], ['12', 'Do standard operating procedures contain descriptions to prevent crews from practicing simulated emergency or abnormal situations in flight while passengers are onboard? (IS-BAO 5.1.4)'], ['13', 'Are there standard procedures for conducting passenger safety briefings? Do these briefing procedures allow for passenger limitations? (FAR 91.519; IS-BAO 6.11; NBAA Management Guide 2.8)'], ['14', 'Do the operating procedures contain a detailed description of pilot flight planning requirements? (FAR 91.129(h); IS-BAO 6.2; NBAA Management Guide Appendix F)'], ['15', 'Are there standardized procedures for the use of checklists covering normal, abnormal, and emergency procedures? (FAR 91.503, 91.1033; IS-BAO 6.12, IG 6.1; NBAA Management Guide 2.10)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Ops 7- Flight Standards 2017 (Part 91)</Text>
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

AppRegistry.registerComponent('Ops791', () => Ops791);