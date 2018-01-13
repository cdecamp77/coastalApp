import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import CheckBox from 'react-native-check-box'

export default class GRAT extends Component {
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
    check19: false,
    check20: false,
    check21: false,
    check22: false,
    check23: false,
    check24: false,
    check25: false,
    check26: false,
    check27: false,
    check28: false,
    check29: false,
    check30: false,
    check31: false,
    check32: false,
    check33: false,
    check34: false,
    check35: false,
    check36: false, 
    check37: false,
    check38: false,
    check39: false,
    check40: false,
    check41: false,
    check42: false,
    check43: false,
    check44: false,
    check45: false,
    check46: false,
    check47: false,
    check48: false,
    check49: false,
    check50: false,
    check51: false,
    check52: false,
    check53: false,
    check54: false,
    check55: false,
    check56: false, 
    check57: false,
    check58: false,
    check59: false,
    check60: false, 
    check61: false,
    check62: false,
    check63: false,
    check64: false,
    check65: false,
    check66: false,
    check67: false,
    check68: false,
    check69: false,
    check70: false,
    check71: false,
    check72: false,
    check73: false,
    check74: false,
    check75: false,
    check76: false, 
    check77: false,
    check78: false,
    check79: false,
    check80: false,
    check81: false,
    totalFactorScore1: 0,
    totalFactorScore2: 0,
    totalFactorScore3: 0,
    totalFactorScore4: 0,
    totalFactorScore5: 0,
    totalFactorScore6: 0,
  }

  handleCheck1(value, checkbox) {
    switch (checkbox) {
      case 1: this.state.check1 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check1: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check1: true})            
      break
      case 2: this.state.check2 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check2: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check2: true})            
      break
      case 3: this.state.check3 ? this.setState({totalFactorScore1: this.state.totalFactorScore1-value, check3: false}) : this.setState({totalFactorScore1: this.state.totalFactorScore1+value, check3: true})
      break
      default: break
    }
  }

  handleCheck2(value, checkbox) {
    switch (checkbox) {
      case 4: this.state.check4 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check4: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check4: true})
      break
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
      case 14: this.state.check14 ? this.setState({totalFactorScore2: this.state.totalFactorScore2-value, check14: false}) : this.setState({totalFactorScore2: this.state.totalFactorScore2+value, check14: true})            
      break
      default: break
    }
  }

  handleCheck3(value, checkbox) {
    switch (checkbox) {
      case 15: this.state.check15 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check15: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check15: true})            
      break
      case 16: this.state.check16 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check16: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check16: true})
      break
      case 17: this.state.check17 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check17: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check17: true})
      break
      case 18: this.state.check18 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check18: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check18: true})
      break
      case 19: this.state.check19 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check19: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check19: true})            
      break
      case 20: this.state.check20 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check20: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check20: true})
      break
      case 21: this.state.check21 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check21: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check21: true})
      break
      case 22: this.state.check22 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check22: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check22: true})
      break
      case 23: this.state.check23 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check23: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check23: true})            
      break
      case 24: this.state.check24 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check24: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check24: true})
      break
      case 25: this.state.check25 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check25: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check25: true})
      break
      case 26: this.state.check26 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check26: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check26: true})
      break
      case 27: this.state.check27 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check27: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check27: true})            
      break
      case 28: this.state.check28 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check28: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check28: true})
      break
      case 29: this.state.check29 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check29: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check29: true})
      break
      case 30: this.state.check30 ? this.setState({totalFactorScore3: this.state.totalFactorScore3-value, check30: false}) : this.setState({totalFactorScore3: this.state.totalFactorScore3+value, check30: true})
      break
      default: break
    }
  }

  handleCheck4(value, checkbox) {
    switch (checkbox) {
      case 31: this.state.check31 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check31: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check31: true})
      break
      case 32: this.state.check32 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check32: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check32: true})            
      break
      case 33: this.state.check33 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check33: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check33: true})            
      break
      case 34: this.state.check34 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check34: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check34: true})
      break
      case 35: this.state.check35 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check35: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check35: true})
      break
      case 36: this.state.check36 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check36: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check36: true})            
      break
      case 37: this.state.check37 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check37: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check37: true})            
      break
      case 38: this.state.check38 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check38: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check38: true})
      break
      case 39: this.state.check39 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check39: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check39: true})
      break
      case 40: this.state.check40 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check40: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check40: true})
      break
      case 41: this.state.check41 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check41: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check41: true})            
      break
      case 42: this.state.check42 ? this.setState({totalFactorScore4: this.state.totalFactorScore4-value, check42: false}) : this.setState({totalFactorScore4: this.state.totalFactorScore4+value, check42: true})            
      break
      default: break
    }
  }

  handleCheck5(value, checkbox) {
    switch (checkbox) {
      case 43: this.state.check43 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check43: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check43: true})
      break
      case 44: this.state.check44 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check44: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check44: true})            
      break
      case 45: this.state.check45 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check45: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check45: true})            
      break
      case 46: this.state.check46 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check46: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check46: true})
      break
      case 47: this.state.check47 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check47: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check47: true})
      break
      case 48: this.state.check48 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check48: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check48: true})            
      break
      case 49: this.state.check49 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check49: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check49: true})            
      break
      case 50: this.state.check50 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check50: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check50: true})
      break
      case 51: this.state.check51 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check51: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check51: true})
      break
      case 52: this.state.check52 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check52: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check52: true})
      break
      case 53: this.state.check53 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check53: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check53: true})
      break
      case 54: this.state.check54 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check54: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check54: true})            
      break
      case 55: this.state.check55 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check55: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check55: true})            
      break
      case 56: this.state.check56 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check56: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check56: true})
      break
      case 57: this.state.check57 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check57: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check57: true})
      break
      case 58: this.state.check58 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check58: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check58: true})            
      break
      case 59: this.state.check59 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check59: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check59: true})            
      break
      case 60: this.state.check60 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check60: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check60: true})
      break
      case 61: this.state.check61 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check61: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check61: true})
      break
      case 62: this.state.check62 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check62: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check62: true})
      break
      case 63: this.state.check63 ? this.setState({totalFactorScore5: this.state.totalFactorScore5-value, check63: false}) : this.setState({totalFactorScore5: this.state.totalFactorScore5+value, check63: true})
      break
      default: break
    }
  }

  handleCheck6(value, checkbox) {
    switch (checkbox) {
      case 64: this.state.check64 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check64: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check64: true})
      break
      case 65: this.state.check65 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check65: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check65: true})            
      break
      case 66: this.state.check66 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check66: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check66: true})            
      break
      case 67: this.state.check67 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check67: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check67: true})
      break
      case 68: this.state.check68 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check68: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check68: true})
      break
      case 69: this.state.check69 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check69: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check69: true})            
      break
      case 70: this.state.check70 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check70: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check70: true})            
      break
      case 71: this.state.check71 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check71: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check71: true})
      break
      case 72: this.state.check72 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check72: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check72: true})
      break
      case 73: this.state.check73 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check73: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check73: true})
      break
      case 74: this.state.check74 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check74: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check74: true})
      break
      case 75: this.state.check75 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check75: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check75: true})            
      break
      case 76: this.state.check76 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check76: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check76: true})            
      break
      case 77: this.state.check77 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check77: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check77: true})
      break
      case 78: this.state.check78 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check78: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check78: true})
      break
      case 79: this.state.check79 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check79: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check79: true})            
      break
      case 80: this.state.check80 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check80: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check80: true})            
      break
      case 81: this.state.check81 ? this.setState({totalFactorScore6: this.state.totalFactorScore6-value, check81: false}) : this.setState({totalFactorScore6: this.state.totalFactorScore6+value, check81: true})
      break
      default: break
    }
  }

  

  render() {
    const tableHead1 = ['Maintenance Risk Assessment']
    const tableData1 = [
      [<CheckBox
        onClick={()=>this.handleCheck1(1, 1)}
      />, 'Completed By: Maintenance Manager', '1'],
      [<CheckBox
        onClick={()=>this.handleCheck1(1, 2)}
      />, 'Completed By: Technician', '1'],
      [<CheckBox
        onClick={()=>this.handleCheck1(3, 3)}
      />, 'Completed By: Other', '3'],
      ['Total Factor Score: ' + this.state.totalFactorScore1 ]
    ]
    const tableHead2 = ['General Outlook']
    const tableData2 = [
      [<CheckBox
        onClick={()=>this.handleCheck2(5, 4)}
      />, 'Activity Type: Aircraft Maintenance', '5'],
      [<CheckBox
        onClick={()=>this.handleCheck2(2, 5)}
      />, 'Activity Type: Hangar Maintenance', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck2(5, 6)}
      />, 'Activity Type: Lack of Time Available', '5'],
      [<CheckBox
        onClick={()=>this.handleCheck2(3, 7)}
      />, 'Activity Type: Concurrent Activities', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck2(4, 8)}
      />, 'Weather/Enviornment/Todays Forecast: Working Temps in 90F+', '4'],
      [<CheckBox
        onClick={()=>this.handleCheck2(3, 9)}
      />, 'Weather/Enviornment/Todays Forecast: Thunderstorm Activity', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck2(4, 10)}
      />, 'Weather/Enviornment/Todays Forecast: High Winds', '4'],
      [<CheckBox
        onClick={()=>this.handleCheck2(3, 11)}
      />, 'Weather/Enviornment/Todays Forecast: Wet/Rain', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck2(5, 12)}
      />, 'Weather/Enviornment/Todays Forecast: Snow', '5'],
      [<CheckBox
        onClick={()=>this.handleCheck2(8, 13)}
      />, 'Weather/Enviornment/Todays Forecast: Ice', '8'],
      [<CheckBox
        onClick={()=>this.handleCheck2(5, 14)}
      />, 'Weather/Enviornment/Todays Forecast: Working in Temps Below 32F', '5'],
      ['Total Factor Score: '+this.state.totalFactorScore2]
    ]
    const tableHead3 = ['Human Factors']
    const tableData3 = [
      [<CheckBox
        onClick={()=>this.handleCheck3(2, 15)}
      />, 'Scheduled Duty Time: 8 or Less Hours', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck3(4, 16)}
      />, 'Scheduled Duty Time: 8-10 Hours', '4'],
      [<CheckBox
        onClick={()=>this.handleCheck3(6, 17)}
      />, 'Scheduled Duty Time: 10-12 Hours', '6'],
      [<CheckBox
        onClick={()=>this.handleCheck3(8, 18)}
      />, 'Scheduled Duty Time: Over 12 Hours', '8'],
      [<CheckBox
        onClick={()=>this.handleCheck3(4, 19)}
      />, 'Any Work in Time Period 2300-0600: Local Time', '4'],
      [<CheckBox
        onClick={()=>this.handleCheck3(6, 20)}
      />, 'Off-Duty Rest: 8 or Less Hours', '6'],
      [<CheckBox
        onClick={()=>this.handleCheck3(3, 21)}
      />, 'Off-Duty Rest: 8-12 Hours', '3'],
      [<CheckBox
        onClick={()=>this.handleCheck3(1, 22)}
      />, 'Off-Duty Rest: 12+ Hours', '1'],
      [<CheckBox
        onClick={()=>this.handleCheck3(10, 23)}
      />, 'Working Alone: Yes', '10'],
      [<CheckBox
        onClick={()=>this.handleCheck3(-4, 24)}
      />, 'Working Alone: Emergency Notification Procedure', '-4'],
      [<CheckBox
        onClick={()=>this.handleCheck3(6, 25)}
      />, 'Contract Maintenance Personnel: Yes', '6'],
      [<CheckBox
        onClick={()=>this.handleCheck3(-3, 26)}
      />, 'Contract Maintenance Personnel: Hangar/Activity Briefing', '-3'],
      [<CheckBox
        onClick={()=>this.handleCheck3(-1, 27)}
      />, 'Personnel Health(Anyone/Everyone): Good', '-1'],
      [<CheckBox
        onClick={()=>this.handleCheck3(2, 28)}
      />, 'Personnel Health(Anyone/Everyone): Minor Sickness', '2'],
      [<CheckBox
        onClick={()=>this.handleCheck3(5, 29)}
      />, 'Personnel Health(Anyone/Everyone): Emotional/ Family Concerns', '5'],
      [<CheckBox
        onClick={()=>this.handleCheck3(7, 30)}
      />, 'Personnel Health(Anyone/Everyone): Other/ Serious', '7'],
      ['Total Factor Score: '+ this.state.totalFactorScore3]
    ]

    const tableHead4 = ['General Conditions/ Activities']
    const tableData4 = [
        [<CheckBox
          onClick={()=>this.handleCheck4(-2, 31)}
        />, 'First Aid Kit: Available', '-2'],
        [<CheckBox
          onClick={()=>this.handleCheck4(-2, 32)}
        />, 'AED: Available', '-2'],
        [<CheckBox
          onClick={()=>this.handleCheck4(-1, 33)}
        />, 'Progtective Clothing/Equipment: Available/Used', '-1'],
        [<CheckBox
          onClick={()=>this.handleCheck4(-1, 34)}
        />, 'Lockout/ Blockout Procedures: Used', '-1'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 35)}
        />, 'Welding, Cutting and Brazing: Yes', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 36)}
        />,'Use of Compressed Gas: Yes', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 37)}
        />, 'Use of Hoist Equipment: Yes', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 38)}
        />, 'Use of Industrial Trucks/ Equip: Yes', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck4(5, 39)}
        />, 'Entering Confined Spaces: Yes', '5'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 40)}
        />, 'Use of Flammable/ Combustible Materials: Yes', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 41)}
        />, 'Use of Hazardous Checmicals: Yes', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck4(3, 42)}
        />, 'Work in High Noise (85dBA+) Areas: Yes', '3'],
        ['Total Factor Score: '+ this.state.totalFactorScore4]
    ]

    const tableHead5 = ['Aircraft Maintenance Activity']
    const tableData5 = [
        [<CheckBox
          onClick={()=>this.handleCheck5(-3, 43)}
        />, 'Technical Data Reviewed', '-3'],
        [<CheckBox
          onClick={()=>this.handleCheck5(3, 44)}
        />, 'Servicing: Fuel', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck5(3, 45)}
        />, 'Servicing: Oxygen', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck5(5, 46)}
        />, 'Servicing: Tire Inflation', '5'],
        [<CheckBox
          onClick={()=>this.handleCheck5(2, 47)}
        />, 'Maintenance: Pre-Flight/ Post Flight', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck5(2, 48)}
        />, 'Maintenance: Scheduled Inspections', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck5(4, 49)}
        />, 'Maintenance: Unscheduled Maintenance', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck5(2, 50)}
        />, 'Tasks Involving: Opening Panels', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck5(2, 51)}
        />, 'Tasks Involving: Electrical Systems', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck5(4, 52)}
        />, 'Tasks Involving: Fuel System', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck5(2, 53)}
        />, 'Tasks Involving: Engines/ APU', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck5(6, 54)}
        />, 'Tasks Involving: Hydraulics', '6'],
        [<CheckBox
          onClick={()=>this.handleCheck5(3, 55)}
        />, 'Tasks Involving: Pneumatics', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck5(2, 56)}
        />, 'ools and Equipment: Use of Work Platforms', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck5(4, 57)}
        />, 'Tools and Equipment: Use of Ladders', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck5(-4, 58)}
        />, 'Tools and Equipment: Use Safety Harness', '-4'],
        [<CheckBox
          onClick={()=>this.handleCheck5(1, 59)}
        />, 'Work Inspected: By Peer', '1'],
        [<CheckBox
          onClick={()=>this.handleCheck5(3, 60)}
        />, 'Work Inspected: No', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck5(5, 61)}
        />, 'Aircraft Towing: Yes', '5'],
        [<CheckBox
          onClick={()=>this.handleCheck5(-4, 62)}
        />, 'Aircraft Towing: Wing Walker(s)', '-4'],
        [<CheckBox
          onClick={()=>this.handleCheck5(5, 63)}
        />, 'Aircraft Jacking: Yes', '5'],
        ['Total Factor Score: '+this.state.totalFactorScore5]
    ]

    const tableHead6 = ['Ramp, Hangar and Tools']
    const tableData6 = [
        [<CheckBox
          onClick={()=>this.handleCheck6(2, 64)}
        />, 'Trip Support: Passenger Boarding/ Deplaning', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(4, 65)}
        />, 'Trip Support: Baggage Handling', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck6(4, 66)}
        />, 'Trip Support: Cargo Handling', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck6(-2, 67)}
        />, 'Ramp Area/AOA: Clear/ Company Aircraft Only', '-2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(2, 68)}
        />, 'Ramp Area/AOA: Aircraft Movement under own Power', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(2, 69)}
        />, 'Ramp Area/AOA: Service Vehicle Activity', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(3, 70)}
        />, 'Ramp Area/AOA: Passenger Vehicle Activity', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck6(1, 71)}
        />, 'Hanger: Clear/ Clean', '1'],
        [<CheckBox
          onClick={()=>this.handleCheck6(3, 72)}
        />, 'Hanger: 1 Aircraft', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck6(5, 73)}
        />, 'Hanger: 2+ Aircraft', '5'],
        [<CheckBox
          onClick={()=>this.handleCheck6(3, 74)}
        />, 'Hanger: Other Obstructions', '3'],
        [<CheckBox
          onClick={()=>this.handleCheck6(4, 75)}
        />, 'Hanger: Fall/ Slip Hazards', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck6(-2, 76)}
        />, 'Ground Service Equipment: Inspected/ Safe', '-2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(2, 77)}
        />, 'Ground Service Equipment: GPU Cart/ Cords in Use', '2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(4, 78)}
        />, 'Ground Service Equipment: Hyd Cart/ Cords in Use', '4'],
        [<CheckBox
          onClick={()=>this.handleCheck6(-3, 79)}
        />, 'Power Tools: Trained in Use', '-3'],
        [<CheckBox
          onClick={()=>this.handleCheck6(-2, 80)}
        />, 'Power Tools: Guards/ Protection Installed/ Used', '-2'],
        [<CheckBox
          onClick={()=>this.handleCheck6(4, 81)}
        />, 'Power Tools: Used Outside of Shop', '4'],
        ['Total Factor Score: '+this.state.totalFactorScore6]
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
          <Table>
            <Row data={tableHead4} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData4} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead5} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData5} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
          <Table>
            <Row data={tableHead6} style={styles.title} />
            <TableWrapper>
              <Rows data={tableData6} flexArr={[1,10,1]} />
            </TableWrapper>
          </Table>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
	container: {
      padding: 20,
      marginBottom: 50
  },
  title: {
    backgroundColor: '#9EBEF2'
  }
});

AppRegistry.registerComponent('GRAT', () => GRAT);