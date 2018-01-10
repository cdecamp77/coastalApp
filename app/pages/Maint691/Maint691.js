import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Maint691 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Is there a formal system in place that provides effective means to control and monitor all maintenance activities and track aircraft maintenance status? (IS-BAO 9.1.1; ARGUS Platinum 4.6.1)'],['2', 'Does the maintenance control system accurately identify all of the instances that require a service difficulty report? (FAR 135.415; IS-BAO IG 9.1.10)'], ['3', 'Is a periodic conformity check used to audit existing aircraft safety equipment item due dates as compared to the computerized tracking program to insure equipment is inspected accurately? (IS-BAO 9.1.4D; ARGUS Platinum 4.6.2; NBAA Management Guide 4.13; FAR 135.431a for 10 or more seating)'], ['4', 'Does the appropriate company maintenance manual contain a thorough description of the maintenance control system? (IS-BAO 9.1.4; ARGUS Platinum 4.6; FAR 135.427 for 10 or more seating)'], ['5', 'Are maintenance personnel appropriately familiar with the specific details and requirements of the company’s maintenance control system? Are they familiar with its description and procedures as listed in the GOM/GMM as applied to the work they perform? (IS-BAO 9.1.5; ARGUS Platinum 4.9; FAR 135.433; for 10 or more seating)'], ['6', 'Are maintenance managers/directors effectively communicating maintenance control and planning issues to operations personnel? (ARGUS Platinum 4.6.4, 4.6.5; IS- BAO IG 9.3, item 4; NBAA Management Guide 4.15)'], ['7', 'Is there a sufficient oversight in-place to ensure that contracted maintenance companies comply with the operators’ maintenance control and return to service procedures as defined in the GOM/GMM? (FAR 135.423; IS-BAO 9.2.1; NBAA Management Guide 4.16; ARGUS Platinum 4.3.6)'], ['8', 'Are there existing procedures in-place that adequately track MEL/deferred maintenance issues to closure? How well are these issues managed? (IS-BAO 9.1.6; ARGUS Platinum 4.6.6)'], ['9', 'Are maintenance release practices in compliance with minimum equipment list (MEL) procedures and do all flight releases match the requirements as outlined in the company GOM? (FAR 135.179a; IS-BAO 9.1.6b; NBAA Management Guide 4.15)'], ['10', 'Does the scheduling and utilization of aircraft provide sufficient time to adequately troubleshoot problems and complete repairs? Are maintenance personnel ever pressured to compromise required work? Is there a hazard reporting process that is responsive to hazards or fatigue issues reported by maintenance personnel? (IS-BAO 6.13; IG 9.1.4m; NBAA Management 4.13.5; 4.18; ARGUS Platinum 4.2.2)'], ['11', 'If the operation conducts ferry flights does the GOM contain procedures describing the approval process for these flights? (FAR part 21.197; IS-BAO 9.1.4i)'], ['12', 'Are there defined criteria to identify and classify repeat discrepancies? Examine how these discrepancies are managed. Are repeat items appropriately identified and tracked? Is root cause analysis used to determine the cause? (IS-BAO 9.1.6; NBAA Management Guide 4.15; ARGUS Platinum 4.3.2)'], ['13', 'Are there specific provisions in the company operations manual for flight crew to obtain maintenance services when away from home base, and how is the repair information incorporated into the maintenance control system? Is this away from home base repair information tracked without exception? (FAR 135.423; IS-BAO 9.2; NBAA Management Guide 4.16; ARGUS Platinum 4.3.4)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Maint 6 - Control/Planning Part 135 (2017)</Text>
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

AppRegistry.registerComponent('Maint691', () => Maint691);