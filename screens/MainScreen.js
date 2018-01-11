import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    //Button,
    Image,
    View
} from 'react-native';
import {  Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.navigate;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.logoContainer]}>
          <Image
              source={require('../assets/images/app_logo.jpg')}
              style={{width:200,height:200}}
          />
        </View>
        <View style={[styles.buttonWrapper]}>
          <Button
              onPress={this._onLoginPress}
              title="Login"
              backgroundColor="#841584"
          />
          <Button
              onPress={this._onSignupPress}
              title="Sign-up"
              backgroundColor="#841584"
          />
          <Button
              onPress={this._onGotToDrawerPress}
              title="go to drawer"
              backgroundColor="#841584"
          />
        </View>
      </View>
    );
  }

  _onLoginPress = () => {
      console.log('Login Button is pressed!');
      this.navigate('LoginForm', { data: 'Rajat' });
  };
  _onSignupPress = () => {
      console.log('Signup Button is pressed!');
      //this.navigate('SignupForm', { data: 'Sharma' });


      const resetAction = NavigationActions.reset({
          index: 1,
          actions: [
              NavigationActions.navigate({ routeName: 'Main'}),
              NavigationActions.navigate({ routeName: 'SignupForm'})
          ]
      });

      this.props.navigation.dispatch(resetAction)
  };
  _onGotToDrawerPress = () => {
    console.log('Signup Button is pressed!');
    this.navigate('HomeScreen', { data: 'Ola' });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:0.5
  },
  buttonWrapper:{
    justifyContent:'space-around',
    paddingHorizontal:20,
    flex:0.3
  }
});
