import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput, ScrollView} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';
import DatePicker from 'react-native-datepicker';
import { Dropdown } from 'react-native-material-dropdown';
import CheckBox from 'react-native-check-box';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class Hazard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      hazard: '',
      name: '',
      height: 50,
      date: new Date()
    }
  }

  handleCheck = () => {
    console.log('box checked');
  }

  updateSize = (height) => {
    this.setState({
      height
    });
  }

  render() {
      const { navigate } = this.props.navigation;
      const {newValue, height} = this.state;
      const tableHead = ['Severity']
      const tableData = [
        [
          <CheckBox onClick={()=>this.handleCheck()} />, <Cell style={{backgroundColor: 'green', alignItems: 'center'}} data='Negligible' />, <Text style={{padding: 4}}>Probably would not affect personnel safety or health, but is in violation of a standard, or property loss less than $10K.</Text>
        ], [
           <CheckBox onClick={()=>this.handleCheck()} />, 
           <Cell style={{backgroundColor: 'yellow', alignItems: 'center'}} data='Marginal' />, <Text style={styles.severityText} >May cause minor injury, minor illness or property loss greater than $10k.</Text>
        ], [
           <CheckBox onClick={()=>this.handleCheck()} />, <Cell style={{backgroundColor: 'orange', alignItems: 'center'}} data='Critical' />,<Text style={styles.severityText}>May cause severe injury, severe illness, or property loss greater than $100k.</Text>
        ], [
          <CheckBox onClick={()=>this.handleCheck()} />, <Cell style={{backgroundColor: 'red', alignItems: 'center'}} data='Catastrophic' />, <Text style={styles.severityText}>The hazard may cause death, or property loss greater than $1 mil.</Text>
        ]
      ]

      let newStyle = {
        height
      }

      let today = new Date();

      let data = [{
        value: 'Bryan',
      }, {
        value: 'Chris',
      }, {
        value: 'Eric'
      }];

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.headline} >Submit a potential hazard report</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys. 
          }}
          onDateChange={(date) => {this.setState({date: date})}}
        />
        <Dropdown
          label='Submitted By:'
          data={data}
          style={styles.dropdown}
        />
        <Text style={styles.details}>
          Detailed Description of the Hazard/Event/Concern 
        </Text>
        <TextInput 
          style={styles.input}
          onChangeText={(hazard) => this.setState({hazard})}
          value={this.state.text}
          placeholder={'Description'}
          placeholderTextColor={'grey'}
          editable={true}
          multiline={true}
          onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
        />
        <Table style={{backgroundColor: 'white'}} >
          <Row data={tableHead} />
          <TableWrapper style={{backgroundColor: 'lightgrey'}}>
            <Rows data={tableData} flexArr={[1,3,8]} />
          </TableWrapper>
        </Table>
        <Button title="Submit" onPress={() => navigate('Hazard')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#abcdef'
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5
  },
  headline: {
    fontSize: 25,
  },
  dropdown: {
    margin: 5
  },
  details: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  severityText: {
    padding: 4,
  }
  });

AppRegistry.registerComponent('Hazard', () => Hazard);