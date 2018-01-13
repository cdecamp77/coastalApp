import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import CheckBox from 'react-native-check-box'


export default class FRAT extends Component {
  state = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false,
    check7: false,
    check8: false,
    check9: false,
    check10: false,
    check11: false,
    check12: false,
    check13: false,
    check14: false,
    check15: false,
    check16: false, 
    check17: false,
    check18: false,
    totalFactorScore1: 0,
    totalFactorScore2: 0,
    totalFactorScore3: 0
  }

  handleCheck1(value, checkbox) {
    switch (checkbox) {
      case 1: this.state.check1 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check1: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check1: true})            
      break
      case 2: this.state.check2 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check2: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check2: true})            
      break
      case 3: this.state.check3 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check3: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check3: true})
      break
      case 4: this.state.check4 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check4: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check4: true})
      break
      default: break
    }
  }

  handleCheck2(value, checkbox) {
    switch (checkbox) {
      case 5: this.state.check5 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check5: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check5: true})            
      break
      case 6: this.state.check6 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check6: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check6: true})            
      break
      case 7: this.state.check7 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check7: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check7: true})
      break
      case 8: this.state.check8 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check8: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check8: true})
      break
      case 9: this.state.check9 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check9: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check9: true})            
      break
      case 10: this.state.check10 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check10: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check10: true})            
      break
      case 11: this.state.check11 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check11: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check11: true})
      break
      case 12: this.state.check12 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check12: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check12: true})
      break
      case 13: this.state.check13 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check13: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check13: true})
      break
      default: break
    }
  }

  handleCheck3(value, checkbox) {
    switch (checkbox) {
      case 14: this.state.check14 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check14: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check14: true})            
      break
      case 15: this.state.check15 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check15: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check15: true})            
      break
      case 16: this.state.check16 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check16: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check16: true})
      break
      case 17: this.state.check17 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check17: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check17: true})
      break
      case 18: this.state.check18 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check18: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check18: true})
      break
      default: break
    }
  }

  render() {
    const tableHead1 = ['Pilot Qualifications / Experience / Duty Time']
    const tableData1 = [
      [<CheckBox
        onClick={()=>this.handleCheck1(3, 1)}
      />, 'PIC with less than 200 hours in type', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck1(-3, 2)}
      />, 'PIC greater than 500 hours in type', '-3'],
      [<CheckBox
        onClick={()=>this.handleCheck1(2, 3)}
      />, 'Dual Pilot Training', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck1(2, 4)}
      />, 'Duty time greater than 10 hours', '2'],
      ['Total Factor Score: '+this.state.totalFactorScore1]
    ]
    const tableHead2 = ['Operating Environment']
    const tableData2 = [
      [<CheckBox
        onClick={()=>this.handleCheck2(3, 5)}
      />, 'Surface winds greater than 30 knots', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck2(2, 6)}
      />, 'Surface winds greater than 20 knots', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck2(3, 7)}
      />, 'Departure/arrival into mountainous terrain', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck2(-3, 8)}
      />, 'Ceiling > 3,000FT Visibility > 3SM', '-3'],
      [<CheckBox
        onClick={()=>this.handleCheck2(5, 9)}
      />, 'Smoke/Haze/Fog', '5'],
      [<CheckBox
        onClick={()=>this.handleCheck2(5, 10)}
      />, 'Convective activity', '5'],
      [<CheckBox
        onClick={()=>this.handleCheck2(-1, 11)}
      />, 'Use of Pre-Designated LZs', '-1'],
      [<CheckBox
        onClick={()=>this.handleCheck2(2, 12)}
      />, 'LZ area with multiple obstacles', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck2(3, 13)}
      />, 'Unimproved landing site', '3'],
      ['Total Factor Score: '+ this.state.totalFactorScore2]
    ]
    const tableHead3 = ['Mission Requirements']
    const tableData3 = [
      [<CheckBox
        onClick={()=>this.handleCheck3(3, 14)}
      />, 'Long line mission', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck3(1, 15)}
      />, 'Belly bucket mission', '1'],
      [<CheckBox
        onClick={()=>this.handleCheck3(2, 16)}
      />, 'Belly hook mission', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck3(4, 17)}
      />, 'Short haul mission', '4'],
      [<CheckBox
        onClick={()=>this.handleCheck3(3, 18)}
      />, '90% of allowable payload', '3'],
      ["Total Factor Score: " +this.state.totalFactorScore3]
    ]
    return (
      <ScrollView style={styles.container}>
        <Text>Flight Risk Anaylsis Tool</Text>
        <Text>Template Name: Coastal Helicopters Fire</Text>
          <Table>
            <Row data={tableHead1} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData1} flexArr={[1,10,1]} style={styles.tableRow} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead2} style={styles.title}  />
            <TableWrapper>
              <Rows data={tableData2} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead3} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData3} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
	container: {
  	padding: 20
  },
  title: {
    backgroundColor: '#9EBEF2'
  },
  tableRow: {

  }
});

AppRegistry.registerComponent('FRAT', () => FRAT);