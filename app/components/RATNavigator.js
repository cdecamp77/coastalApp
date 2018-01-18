import { StackNavigator } from 'react-navigation';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
  } from 'react-native';  
import React, { Component } from 'react';
import RAT from '../pages/RAT/RAT';
import GRAT from '../pages/GRAT/GRAT';
import FRAT from '../pages/FRAT/FRAT';

const RATNavigator = StackNavigator({
    RAT: {screen: RAT},
    FRAT: {screen: FRAT},
    GRAT: {screen: GRAT}
  });

export default RATNavigator;