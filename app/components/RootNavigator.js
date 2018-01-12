
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
import IEPManager from '../pages/IEPManager/IEPManager'
import Maint591 from '../pages/Maint591/Maint591'

const RootNavigator = StackNavigator({
    IEPManager: {screen: IEPManager},
    Maint591: {screen: Maint591},

  });

export default RootNavigator;