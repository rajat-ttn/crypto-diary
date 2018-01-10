import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';


import MainScreen from '../screens/MainScreen';
import LoginFormScreen from '../screens/LoginFormScreen';
import SignupFormScreen from '../screens/SignupFormScreen';

import DrawerNavigator from './DrawerNavigator';

const RootStackNavigator = StackNavigator(
  {
    Main:{
      screen:MainScreen,
    },
    LoginForm:{
      screen:LoginFormScreen,
    },
    SignupForm:{
      screen:SignupFormScreen
    },
    HomeScreen:{
      screen: DrawerNavigator,
        navigationOptions:{
            header:null,
            title:'rajat'
        }
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
        title:'hello'
    })
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return <RootStackNavigator />;
  }
}
