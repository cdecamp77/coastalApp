import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops5135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are the company’s pilot hiring criteria and procedures formally established and documented?  (IS-BAO 4.1.1,  10.1; NBAA Management Guide 1.5, 1.6; ARGUS Platinum 3.2.1)'],['2', 'Are established minimum hiring qualifications appropriate for the scope of the operation, and have they been reviewed periodically? (Rating, Flight Time, Medical etc.)  (FAR Part 135 Subpart E; NBAA Management Guide 1.7; IS-BAO 4.3.1; ARGUS Platinum 3.2.2, 3.2.3)'], ['3', 'Examine the search/job posting process used to solicit new pilot candidates. Is the process effective in producing qualified individuals for the hiring process? (IS-BAO 4.1.1; NBAA Management Guide 1.5)'], ['4', 'Are the company participants in the hiring process adequately trained? (IS-BAO 4.1.1; NBAA Management Guide 1.5)'], ['5', 'Is the interview process established in a structured manner? Is the interview process documented? (NBAA Management Guide 1.5; ARGUS Platinum 3.2.4)'], ['6', 'Does the interview process result in a comprehensive and effective method capable of determining an applicant’s skill level and personality fit for the company? (NBAA Management Guide 1.6; ARGUS Platinum 3.2.4)'], ['7', 'Is a sufficient reference, criminal and accident history check accomplished during the hiring process? Are the results of these checks maintained in a secure location? (AC 120-68G; IS-BAO IG 15.0 section 3.B.1; NBAA Management Guide 1.7 & 1.11; ARGUS Platinum 3.2.4)'], ['8', 'Are new-hires given an appropriate probationary period and a subsequent timely performance review? (PRISM Recommended Practice)'], ['9', 'Evaluate the overall hiring process by examining the pilot retention and turnover rate within the flight operation. (PRISM Best Practice)'], ['10', 'Are flight training devices (simulators) used to evaluate potential new hires? (NBAA Management Guide 1.5)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Ops 5 - Pilot Hiring 2017 (part 135)</Text>
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

AppRegistry.registerComponent('Ops5135', () => Ops5135);