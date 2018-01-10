import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Maint6135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are the training center(s) utilized by your organization audited on a bi-annual basis to ensure training consistency using a company prescribed syllabus and specific company procedures? Is there a formal process in place to review these audits and verify they are completed as required? (FAR 135.335; IS-BAO IG 5.1.1; ARGUS Platinum 3.3.1[g]; NBAA Management Guide 2.3)'],['2', 'Is the company training manual and curriculum reviewed and kept up to date to ensure it contains training guidance on new equipment subject matter and new procedures? Are training materials up to date and reviewed for accuracy?  (FAR 135.327; IS-BAO 5.1.1, 5.1.3; ARGUS Platinum 3.3.1 )'], ['3', 'Is SMS training a part of your flight crew training program and reflective of current organizational practices?  (IS-BAO 3.2.4; ARGUS Platinum 2.3.11; NBAA Management Guide 1.4 )'], ['4', 'Is the training manual a controlled document with revision tracking and an approved, up-to-date list of effective pages? Who is assigned to keep the manual in proper format?  (FAR 135.23; IS-BAO 10.2b; ARGUS Platinum 3.3.1[b])'], ['5', 'Is training appropriately documented in organized records to verify it is completed as required in the training manual/Opspecs?  (FAR 135.63a[4]; IS-BAO 5.6.1; ARGUS Platinum 3.3.2[a], NBAA Management Guide 1.11)'], ['6', 'Are special authorizations such as RVSM, ILS Cat II/III, defined in the training manual? Is this training being conducted as required?  (FAR 135.329e; IS-BAO 5.1.3e; ARGUS Platinum 3.1.13[c], 3.1.22[b]; NBAA Management Guide 2.3)'], ['7', 'How well does the training program prepare pilots for the specific operational needs of the operation?  (FAR 135.329e; IS-BAO 5.1.3e; NBAA Management Guide 2.3)'], ['8', 'Do flight crews and cabin crews participate in applicable emergency training together?  (FAR 135.331; IS-BAO 5.3, IG 5.3; ARGUS Platinum 3.3.1[h]; NBAA Management Guide 2.4)'], ['9', 'As a component of the security program, is adequate training pertinent to company facilities, ramp operations and TFSSP procedures provided for flight crews?  (FAR 135.125; IS-BAO 15.2, IG 15.5; ARGUS Platinum 3.3.1[f], 3.6.8; NBAA Management Guide 2.4)'], ['10', 'Does the company training program ensure all flight crew members receive the applicable hazmat initial and recurrent training for “Carry” or “Will not carry” as required by regulation?  (FAR 135.503; IS-BAO 5.1.3, 14.1.3, IG 5.1.3.16; NBAA Management Guide 2.3; ARGUS Platinum 3.3.2[a]7)'], ['11', 'Is aircraft surface contamination training being completed annually by all cabin and flight crewmembers? Are the most recently published holdover tables being utilized?  (FAR 135.345b; IS-BAO 5.1.3a, 5.1.3b, IG 5.1.3.14; NBAA Management Guide 2.4)'], ['12', 'Is there a formal new pilot indoctrination training program? How are flight crew members’ basic indoctrination ground training tracked? Are the training materials current?  (FAR 135.329; IS-BAO 5.1.1, 5.6.1, NBAA Management Guide 2.3)'], ['13', 'Examine the flight instructor or check airman program to ensure each instructor has completed the required training for simulator or in-flight instruction. Are the training materials current? Is there a formalized company procedure to select pilots to become check airman?  (FAR 135.339, 135.340; IS-BAO IG 5.1.3.20[c]; ARGUS Platinum 3.3.1[m-p])'], ['14', 'Is there a crew resource management (CRM) and Human Factors training program and have all flight crew members received training? Do schedulers, dispatchers, and any others connected with the flight planning receive appropriate Human Factors training as well?  (FAR 135.330; IS-BAO 5.2; ARGUS Platinum 3.3.1[j], 3.3.1[i]; NBAA Management Guide 2.4 )'], ['15', 'Is there an established fatigue management system that includes fatigue training for all flight crew members? Do schedulers, maintenance personnel, and any others connected with the flight operations receive appropriate fatigue training as well?  (FAR 135.330a(6); IS-BAO 11.2, IG 5.1.3.21[d]; ARGUS Platinum 3.5.3; 3.5.5[e], 4.2.2)'], ['16', 'Is there a high altitude training program that is specific to each aircraft type? Are stalls included in the training?  (FAR 135.345a, IS-BAO 5.4, 5.1.3[a]12; NBAA Management Guide 2.3)'], ['17', 'Is First Aid training provided to all crew members and offered to any other interested company employees?  (FAR 135.331, IS-BAO 5.1.3a.iv, 5.1.3b.ii.A; NBAA Management Guide 2.4 )'], ['18', 'Is water survival training accomplished with qualified instructors in an actual water environment? (PRISM recommended practice)'], ['19', 'Are pilot training requirements assessed as part of company change management activities when appropriate? (PRISM recommended practice)'], ['20', '(For operators conducting international operations) Are flight crews appropriately trained to conduct international operations? (IS-BAO 5.1.3, 7.3.1[b]; NBAA Management Guide 2.4, 3.5; ARGUS Platinum 3.1.17, 3.1.18)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Operations 6- Pilot Training Part 135 (2017)</Text>
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

AppRegistry.registerComponent('Maint6135', () => Maint6135);