import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops8135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'If Cabin Service Representatives (CSRs) or flight technicians are utilized, are they clearly and formally identified as passengers, not crewmembers, on all flight documentation? Examine manifests to verify passenger status. (NBAA Management Guide 1.6.8, FAA SAFO-08010)'],['2', 'Are aircraft with equipped with a shoulder harness for each cabin crew member seat that is not a regular passenger seat?  (FAR 135.171; IS-BAO IG 8.4.1d)'], ['3', 'Are flight attendant seats formally designated and positioned so they can be of the most assistance to passengers in an emergency situation and during takeoff, landing, and other times at the direction of the PIC? (AC 25.785-1B)'], ['4', 'Are all flight attendants included in Crew Resource Management (CRM) or other type of communication training? (FAR 135.330 & 135.349; AC 120-51E; IS-BAO 5.2; ARGUS Platinum 3.3.1[h & j]; NBAA Management Guide 1.6.7 & 2.4.1)'], ['5', 'Are all other cabin personnel trained in effective cabin/cockpit communication and coordination? (FAR 135.330 & 135.331; IS-BAO 6.0, IG 5.1.3.17 & 6.0; NBAA Management Guide 1.6.7)'], ['6', 'Does the fatigue policy address duty time and rest requirements for flight attendants? Are these requirements adhered to without exception? (FAR 135.273; IS-BAO 11.0 & IG 11.0; NBAA Management Guide 1.6.7 & 2.6; ARGUS Platinum 3.5.5)'], ['7', 'Are standardized training records maintained for all designated flight attendants and other designated cabin personnel? (FAR 135.63a[5]; IS-BAO 5.6; ARGUS Platinum 3.3.2; NBAA Management Guide 1.6.6 & 1.11)'], ['8', 'Are all CSRs and flight attendants given company indoctrination training, including the company’s safety management system? Are they aware of hazard reporting options? (FAR 135.329; IS-BAO 3.2.4; ARGUS Platinum 2.3.8.a, 2.3.11.a.2 & 3.1.31; NBAA Management Guide 1.6.6)'], ['9', 'Are all flight attendants trained (initial and recurrent) in emergency and safety procedures specific to company aircraft. (FAR 135.331, 135.349, & 135.351; IS-BAO 5.3 & IG 5.3; ARGUS Platinum 3.3.1.f, 3.3.1.h, & 3.6.8; NBAA Management Guide 1.6.6, 1.6.7, & 2.4.3-2.4.5)'], ['10', 'Are prospective flight attendant candidates vetted with a defined background check as part of the hiring process? For contracted flight attendants, are there established selection procedures that account for security concerns? (IS-BAO 4.3.1 & IG 15.3b[1]; ARGUS Platinum 3.2.1 & 3.2.2; NBAA Management Guide 1.5)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Ops 8- Cabin Crew and Service Reps Part 135 (2016)</Text>
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

AppRegistry.registerComponent('Ops8135', () => Ops8135);