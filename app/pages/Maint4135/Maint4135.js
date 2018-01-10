import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Maint4135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are procedures in place to ensure all Required Inspection Items (RII) are completed? Does the maintenance manual contain an updated list of Required Inspection Items? (FAR 135.419, 135.427, 135.429; IS-BAO IG 9.1.4; ARGUS Platinum 4.4.4; NBAA Management Guide 4.13)'],['2', 'Examine the maintenance inspection procedures; they should prevent any inspection from being performed by the technician who completed the work. This is a regulation for required inspections. Do company procedures define this requirement? (FAR 135.423;  ARGUS Platinum 4.4.4)'], ['3', 'Does the maintenance organization maintain a list of inspectors (internal and external) that are qualified, trained, and authorized to perform required inspections? Does the list also contain the inspections they are authorized to perform? (FAR 135.429; IS-BAO 4.4.1, 5.1.6, 9.2.1; ARGUS Platinum 4.4.4; NBAA Management Guide 4.12.10)'], ['4', 'How is initial and recurrent training for inspectors conducted and documented? (FAR 135.429, 135.433; IS-BAO 5.1.6; ARGUS Platinum 4.4.4[b])'], ['5', 'Does the maintenance manual specifically grant the authority to countermand a RII inspector’s decision only to qualified individuals? (FAR 135.427; ARGUS Platinum 4.1.1[d], 4.4.4; IS-BAO 9.1.4[a])'], ['6', 'Does the maintenance manual contain a buy-back procedure for the re-inspection of work performed under previous required inspection findings completed at your maintenance facility or at a location other than your facilities? (FAR 135.427(b)(4))'], ['7', 'How are applicable Service Bulletins and Airworthiness Directives complied with?  Is there an Airworthiness Directives / Service Bulletins review that prevents omission? (FAR 135.439; IS-BAO 9.1.4[e], IG 4.2.3[a.][5], IG 9.1.4[e]; ARGUS Platinum 4.4.3; NBAA Management Guide 4.13)'], ['8', 'Is there a process to detect recurring defects when reported?  Are these malfunctions addressed and inspected appropriately?  (IS-BAO 9.1.6[c], IG 9.1.6[c])'], ['9', 'Evaluate the engine condition monitoring program. (FAR 135 Appendix G ETOPS- G135.2.8(j); ARGUS Platinum 4.3.2, 4.6.3; IS-BAO 9.1.11[c]; NBAA Management Guide 4.12 )'], ['10', 'Is there a formal and defined process to consistently review the manufacturer’s maintenance manuals and their revisions to ensure all requirements are identified and complied with? (FAR 135.421; ARGUS Platinum 4.4.2; IS-BAO 9.1.4[b][ii]; NBAA Management Guide 4.11']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Maintenance 4 - Inspection Program Part 135 (2017)</Text>
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

AppRegistry.registerComponent('Maint4135', () => Maint4135);