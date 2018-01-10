import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops1135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are ops management responsibilities adequately aligned with the requirements of the flight operation? (FAR 119.69, FAR 119.71; IS-BAO 4.1; ARGUS Platinum MGT 2.2.1; NBAA Management Guide 1.6)'],['2', 'Are ops management’s duties and responsibilities clearly and thoroughly defined in a company General Operating Manual, or equivalent manual, to include all necessary interaction with and utilization of safety and quality management processes and procedures? (FAR 135.23[a]; IS-BAO 4.1.1, 10.2c, IG 4.1.1; ARGUS Platinum MGT 2.2.3; NBAA Management Guide 1.6.1)'], ['3', 'Evaluate operation management’s consistent and proactive commitment to safety and risk management, regardless of influencing factors.  (IS-BAO 3.2.1b, 3.2.2; ARGUS Platinum SMS 2.3.8; NBAA Management Guide 1.3)'], ['4', 'Interview several flight crew and determine how comfortable they are with regard to approaching managers to address perceived safety concerns.  (IS-BAO 3.2.1[a]; ARGUS Platinum SMS 2.3.1, 2.3.4, 2.3.7, 2.3.8a; NBAA Management Guide 1.3)'], ['5', 'Evaluate management’s effectiveness handling day to day operational issues.  Are problems proactively identified and tracked for resolution and trending? (IS-BAO 3.2.2; ARGUS Platinum SMS 2.3.8; NBAA Management Guide 1.4)'], ['6', 'How well do ops managers communicate throughout the organization?  Are suggestions from employees solicited and reviewed?  (IS-BAO 3.2.4[b]; ARGUS Platinum SMS 2.3.12b; NBAA Management Guide 1.3, 1.4)'], ['7', 'Are deficiencies identified by inspections, audits and internal evaluations reviewed by managers and corrected with their involvement and/or oversight?  Are these corrective actions documented and subsequently evaluated for effectiveness? (IS-BAO 3.2.3; ARGUS Platinum SMS 2.3.10; NBAA Management Guide 1.4)'], ['8', 'Are operations managers overburdened, even on occasion, with additional duties and not able to perform their assigned tasks effectively? (IS-BAO 4.1.1; ARGUS Platinum MGT 2.2.1, 2.2.4c)'], ['9', 'Is the published organizational chart correct and complete?  If the operation has more than one operating base, does the management structure and responsibilities match the organizational chart? (FAR 119.69, 135.23; IS-BAO 4.1.1, IG 4.1; ARGUS Platinum MGT 2.2.5; NBAA Management Guide 1.6)'], ['10', 'Do all managers understand and abide by the company safety policy statement signed by the CEO/President/Senior Management without exception? (IS-BAO 3.2.1; ARGUS Platinum SMS 2.3.7; NBAA Management Guide 1.3)'], ['11', 'Is ops management provided the necessary fiscal resources and allocation authority for flight operations? (FAR 135.23(a); IS-BAO 3.2.1.b; ARGUS Platinum MGT 2.2.4a, 2.2.5; NBAA Management Guide 1.6.1)'], ['12', 'Do operations managers understand risk management and use the defined processes described in the SMS procedures? (IS-BAO 3.2.2; ARGUS Platinum SMS 2.3.8; NBAA Management Guide 1.3, 1.4)'], ['13', 'Do operations managers understand change management and use the defined process as described in the SMS procedures? (IS-BAO 3.2.3.b; ARGUS Platinum SMS 2.3.9d; ARGUS Platinum ORG 2.1.1; NBAA Management Guide 1.4)'], ['14', 'Are ops management duties and responsibilities reviewed on a periodic basis to ensure they are appropriate for the size and scope of the operation? (ARGUS Platinum SMS 2.3.4; IS-BAO 3.2.1.e; NBAA Management Guide 1.6)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Ops 1 - Operations Management 2016 (Part 135)</Text>
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

AppRegistry.registerComponent('Ops1135', () => Ops1135);