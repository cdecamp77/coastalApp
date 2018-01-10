import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops8RW extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', 'Are aircraft survival equipment records consistently kept organized and well maintained? (FAA part 91.409, RTCA/DO-275 section 5.)'],['2', 'If crewmembers fly with personal / individual survival equipment like survival vests, helmets and so forth, are records for this equipment kept organized and well maintained. (Manufacture Specific)'], ['3', 'Is an automated or semi-automated tracking system in place to ensure all survival and emergency equipment is inspected regularly under required inspection periods? (FAR 43.13 / PRISM Best Practice)'], ['4', 'Are required publications available and current for maintaining, inspecting and installing specific survival equipment that the operator uses? (FAR 43.13 /Manufacture specific)'], ['5', 'Are Hazmat shipping procedures in place and followed when an operator needs to ship survival equipment that contains hazardous material? Examples can include CO2 inflation devices or signal flares. (CFR 49)'], ['6', 'Are perishable items that may be in an Operators survival kit being replaced prior to the expiration date? (FAR 43.13)'], ['7', 'Is expired or overdue emergency and life support equipment tagged and identified to prevent use? (FAR 43.13)'], ['8', 'Has the organization established formal training on the use of the onboard survival equipment / individual aircrew survival equipment? (FAR 135.323)'], ['9', 'Are aircrew personnel properly trained in techniques of survival for the specific environment(s) that the crew frequently operates in? (PRISM Best practice / FAR 135.323)'], ['10', 'If aircrew members are part of a flight that requires them to move about the cabin to accomplish their mission are they wearing an approved auxiliary restraint harness / tether? (IHOG Ch.9.Chart 9-1)'], ['11', 'For operators required to or who voluntarily elect to carry survival kits, are the contents aligned with required or recommended items and suitable for the environmental conditions that exist? (Part 135.167, IHOG Pg.9-7)']
      ]
    return (
      <ScrollView>
        <Text style={styles.container}>Internal Evaluation Program Manager: OPS 8-(RW) Aviation Life Support / Survival Equipment (2016)</Text>
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

AppRegistry.registerComponent('Ops8RW', () => Ops8RW);