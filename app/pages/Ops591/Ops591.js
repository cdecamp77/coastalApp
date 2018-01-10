import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops591 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are the company’s pilot hiring criteria and procedures formally established and documented? (IS-BAO 4.1.1, 10.1; NBAA Management Guide 1.5, 1.6)'],['2', 'Are established minimum hiring qualifications appropriate for the scope of the operation, and have they been reviewed periodically? (Rating, Flight Time, Medical etc.) (IS-BAO 4.3.1, NBAA Management Guide 1.7)'], ['3', 'Examine the search/job posting process used to solicit new pilot candidates. Is the process effective in producing qualified individuals for interviews? (IS-BAO 4.1.1, NBAA Management Guide 1.5)'], ['4', 'Are the company participants in the hiring process adequately trained? (IS-BAO 4.1.1; NBAA Management Guide 1.5)'], ['5', 'Is the interview process established in a structured manner? Is the interview process documented? (NBAA Management Guide 1.5)'], ['6', 'Does the interview process result in a comprehensive and effective method capable of determining an applicant’s skill level and personality fit for the company? (NBAA Management Guide 1.6)'], ['7', 'Is a sufficient reference and criminal history check accomplished during the hiring process? Are the results of these checks maintained in a secure location? (IS-BAO IG 15.0 section 3.B.1; NBAA Voluntary Security Protocol for Part 91 Operators; NBAA Management Guide 1.7 & 1.11)'], ['8', 'Are all prospective candidates required to take a pre-employment drug & alcohol test before final hiring occurs? Is this completed with the oversight of the appropriate individual or department within your organization? (PRISM Recommended Practice; IS-BAO 4.6; NBAA Management Guide 2.5)'], ['9', 'Are newly hired pilots given an appropriate probationary period and subsequent timely performance review? (PRISM Recommended Practice)'], ['10', 'Evaluate the overall hiring process by examining the pilot retention and turnover rate within the flight operation. (PRISM Best Practice)'], ['11', 'Are flight training devices (simulators) used to evaluate potential new hires? (NBAA Management Guide 1.5)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Ops 5- Pilot Hiring 2017 (part 91)</Text>
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

AppRegistry.registerComponent('Ops591', () => Ops591);