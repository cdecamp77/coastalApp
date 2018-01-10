import React, {Component} from 'react';
import {AppRegistry, View, Text, ScrollView, StyleSheet} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Ops4135 extends Component {
  render() {
      const tableHead = ['#', 'Question'];
      const tableData = [
          ['1', ''],['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', ''], ['9', ''], ['10', ''], ['11', ''], ['12', ''], ['13', ''], ['14', ''], ['15', ''], ['16', '']
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

AppRegistry.registerComponent('Ops4135', () => Ops4135);