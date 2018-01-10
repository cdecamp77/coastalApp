import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Maint7135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Is all required cabin emergency equipment inspected on a regular basis and documented in a tracking system? (i.e. AVTRAK, CAMP, CMP, CESCOM) (FAR 135.167, 135.177, 135.419; ARGUS Platinum 4.8.2[a])'],['2', 'Are all emergency equipment items referenced on the passengers’ briefing cards clearly placarded and found in their respective location? (FAR 135.117; 135.129[d]; IS-BAO 6.11.5, IG 8.5.3; ARGUS Platinum 4.8.2[b &c]; NBAA Management Guide 2.8; FAA AC 121-24C Appendix 3)'], ['3', 'Are all cabin crew and passenger information signs and placards legible and current? (FAR 135.127)'], ['4', 'Are briefing cards (or A/V methods) inspected on a regular cycle for currency and correctness? (FAR 135.117; IS-BAO 6.11.5; FAA AC 121-24C Appendix 3; NBAA Management Guide 2.8 ARGUS Platinum 4.8.2[c]) )'], ['5', 'Is the correct documentation onboard all aircraft (ie. GOM, GMM, MEL, NEF, charts, checklists, etc.) and is this documentation current and approved by the appropriate authority (company, manufacturer or FSDO)? (FAR 135.83, 135.21f; IS-BAO 8.2.1; ARGUS Platinum 4.8.3)'], ['6', 'Are required manuals, charts, checklists and other aircraft documentation securely stored aboard all aircraft? (FAR 135.83; IS-BAO 8.2.1)'], ['7', 'Do aircraft main and emergency exit doors have the correct 2 inch continuous color band and signage? (FAR Part 25.811, 135.178(g))'], ['8', 'Is there an emergency exit security pin or locking device in the aircraft and is it used when aircraft are parked outside of a secure hangar? (IS-BAO IG15.3.c.4; NBAA Management Guide 2.14; NBAA Best Practices for Business Aviation Security)'], ['9', 'If passenger baggage scales are carried onboard aircraft are they calibrated? (ARGUS Platinum 4.3.9; NBAA Management Guide 4.9; IS-BAO 9.1.4[g])'], ['10', 'Are aircraft emptied of all expired consumables after every flight? How are these items disposed? (IS-BAO 12.1; ARGUS Platinum 4.8.4; NBAA Management Guide 4.12.2)'], ['11', 'How are aircraft interiors inspected after a flight? Are discrepancies generated when material condition or significant cleaning work is required? (ARGUS Platinum 4.8.1; NBAA Management Guide 4.12.2)'], ['12', 'Do appropriate procedures exist to address concerns regarding the spread of contaminants in aircraft? Are adequate cleansing materials provided? (IS-BAO 6.14, 12.1e, 13.1f)'], ['13', 'Is the baggage storage area on all aircraft kept clean and secure? Are there adequate means of securing stowed bags to prevent inflight damage? (IS-BAO 6.16; FAR Part 135.87)'], ['14', 'Are aircraft exteriors clean and well maintained, free of dirt, debris and surface contamination? Is there a policy in place to keep the aircraft exterior in a clean condition? (IS-BAO 6.2.10; ARGUS Platinum 4.8.1; FAR Part 135.227(b)(1); NBAA Management Guide 4.12.2'], ['15', '(Contract cleaning services only) Are contract cleaners aware of company specific requirements and procedures for safety and security; are they aware of local safety equipment locations and usage? Are adequate tools and materials available for their use? (IS-BAO 9.2.1)'], ['16', 'Is there an Automated External Defibrillator (AED) available on all aircraft? (ARGUS Platinum 4.8.5; NBAA Management Guide 3.12.8)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: Maint 7 - Aircraft Condition 2017 (Part 135)</Text>
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

AppRegistry.registerComponent('Maint7135', () => Maint7135);