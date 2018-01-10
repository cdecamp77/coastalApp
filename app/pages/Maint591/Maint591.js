import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Maint591 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Examine the process for tracking initial and recurrent maintenance training requirements for individuals. Is it functional and reliable? How are expirations tracked and resolved? (IS-BAO 5.1.6 & 5.6.1; NBAA Management Guide 4.10)'],['2', 'Are all newly hired employees provided with timely indoctrination training and is the training appropriately documented? (IS-BAO 5.1.6 & 5.6.1; NBAA Management Guide 4.10)'], ['3', 'Is there a maintenance initial engine run-up and taxi training program? If so, examine the program to ensure training requirements are met. Recurrent training should also be conducted. (IS-BAO 5.1.6a & 6.18A)'], ['4', 'Is on-the-job training (OJT) a defined, effective, and documented maintenance training program? (IS-BAO 5.1.6a)'], ['5', 'Are minimum initial and recurrent technical training requirements established and documented? How does the company ensure that all maintenance personnel are competent and appropriately trained to perform assigned tasks? (IS-BAO 5.1.6; NBAA Management Guide 4.10)'], ['6', 'Is human factors training part of the company’s maintenance training requirements? (IS-BAO 5.1.6c.iv, 5.2.2, 11.2b)'], ['7', 'Does the company maintenance manual or policies contain an adequate description of maintenance training procedures and requirements? (IS-BAO 5.1.6b; NBAA Management Guide 4.10)'], ['8', 'Examine individual maintenance employee training records. Are they well maintained and organized? Do they contain all required documentation, in accordance with regulations and company requirements? (IS-BAO 5.6)'], ['9', 'Are adequate internal training facilities available for maintenance employees? Are utilized training materials reviewed for currency? (IS-BAO IG 5.1.3.20a; NBAA Management Guide 4.10)'], ['10', 'Examine the company’s hazardous materials training program. Ensure training is completed and documented IAW with DOT and OSHA requirements.  (IS-BAO 5.1.6d[vi], 13.1f; NBAA Management Guide 4.10; 49 CFR 175.20; 1910 Subpart H – Hazardous Materials)'], ['11', 'Are there defined procedures to verify vendors performing contracted maintenance work are appropriately trained? Are these vendors provided with company/site specific training, when required? (IS-BAO 5.1.6a)'], ['12', 'Do employees receive formal initial and recurrent aircraft specific training? (IS-BAO 5.1.6d; NBAA Management Guide 4.10)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Maintenance 5 - Training 2017 (Part 91)</Text>
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

AppRegistry.registerComponent('Maint591', () => Maint591);