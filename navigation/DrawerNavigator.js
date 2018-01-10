import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import TransactionsScreen from '../screens/TransactionsScreen';
import FooScreen from '../screens/FooScreen';

export default DrawerNavigator(
  {
    Transactions: {
      screen: TransactionsScreen,
    },
    Foo: {
      screen: FooScreen,
    }
  });
