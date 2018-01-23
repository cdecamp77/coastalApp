import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, ScrollView, TouchableOpacity, Button, Image, Picker, Modal} from 'react-native';
import CoastalLogo from '../../assets/CoastalLogo.png';

export default class RAT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            rat: ''
        }
    }

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible: false});
    }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={require('../../assets/CoastalLogo.png')} />
            {/* <Text style={styles.h1}>Risk Analysis Tools</Text> */}
            <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}
                onRequestClose={()=>this.closeModal()}
            >
            <View stlye={styles.modalContainer}>
            <View stlye={styles.innerContainer}>
            <Button style={styles.button}  onPress={() => {navigate('FRAT'); this.closeModal()}} title="Flight Risk Analysis Tool" />
            <Button style={styles.button}  onPress={() => {navigate('GRAT'); this.closeModal()}} title="Ground Risk Analysis Tool" />
            <Button onPress={()=> this.closeModal()} title="Close" >
            </Button>
            
            </View>
            </View>
            </Modal>
            <Button onPress={()=> this.openModal()} title="Risk Analysis Tools" />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'lightgrey'
    },
    h1: {
        fontSize: 25,
        textAlign: 'center',
        margin: 25
    },
    button: {
        margin: 10,
        width: 260,
        backgroundColor: '#2196F3'
    },
    image: {
        width: 350,
        height: 100
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'grey',
        height: 300
    },
    innerContainer: {
        alignItems: 'center',
    }
});

AppRegistry.registerComponent('RAT', () => RAT);