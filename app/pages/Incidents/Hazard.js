import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, Image, Button, TextInput} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';
import RootNavigator from '../../components/RootNavigator';


export default class Hazard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      text: '',
      height: 40
    }
  }

  updateSize = (height) => {
    this.setState({
      height
    });
  }

  render() {
      const { navigate } = this.props.navigation;
      const {newValue, height} = this.state;

      let newStyle = {
        height
      }

    return (
      <View style={styles.container}>
        <Text style={styles.headline} >Submit a potential hazard report</Text>
        <TextInput 
          style={styles.hazardInput}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Description'}
          placeholderTextColor={'grey'}
          editable={true}
          multiline={true}
          onContentSizeChange={(e) => this.updateSize(e.nativeEvent.contentSize.height)}
        />
        <Button title="Submit" onPress={() => navigate('Hazard')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#abcdef'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  hazardInput: {
    backgroundColor: 'white',
    borderRadius: 1,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5
  },
  headline: {
    fontSize: 25,
    
  }
  });

AppRegistry.registerComponent('Hazard', () => Hazard);