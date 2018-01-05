import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';


import MainScreen from '../screens/MainScreen';
import LoginFormScreen from '../screens/LoginFormScreen';

const RootStackNavigator = StackNavigator(
  {
    Main:{
      screen:MainScreen
    },
    LoginForm:{
      screen:LoginFormScreen
    }
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
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
