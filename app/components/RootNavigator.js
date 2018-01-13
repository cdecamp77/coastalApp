
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
import FRAT from '../pages/FRAT/FRAT'
import GRAT from '../pages/GRAT/GRAT'
import Maint591 from '../pages/Maint591/Maint591'
import Maint691 from '../pages/Maint691/Maint691'
import Maint791 from '../pages/Maint791/Maint791'
import Maint4135 from '../pages/Maint4135/Maint4135'
import Maint5135 from '../pages/Maint5135/Maint5135'
import Maint7135 from '../pages/Maint7135/Maint7135'
import Maint8135 from '../pages/Maint8135/Maint8135'
import Ops8RW from '../pages/Ops8RW/Ops8RW'
import Ops8135 from '../pages/Ops8135/Ops8135'
import Ops591 from '../pages/Ops591/Ops591'
import Ops791 from '../pages/Ops791/Ops791'
import Ops1135 from '../pages/Ops1135/Ops1135'
import Ops4135 from '../pages/Ops4135/Ops4135'
import Ops5135 from '../pages/Ops5135/Ops5135'
import Ops6135 from '../pages/Ops6135/Ops6135'
import Ops7135 from '../pages/Ops7135/Ops7135'

const RootNavigator = StackNavigator({
    IEPManager: {screen: IEPManager},
    FRAT: {screen: FRAT},
    GRAT: {screen: GRAT},
    Maint591: {screen: Maint591},
    Maint691: {screen: Maint691},
    Maint791: {screen: Maint791},
    Maint4135: {screen: Maint4135},
    Maint5135: {screen: Maint5135},
    Maint7135: {screen: Maint7135},
    Maint8135: {screen: Maint8135},
    Ops8RW: {screen: Ops8RW},
    Ops8135: {screen: Ops8135},
    Ops591: {screen: Ops591},
    Ops791: {screen: Ops791},
    Ops1135: {screen: Ops1135},
    Ops4135: {screen: Ops4135},
    Ops5135: {screen: Ops5135},
    Ops6135: {screen: Ops6135},
    Ops7135: {screen: Ops7135},
  });

export default RootNavigator;