import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Button,
    Image,
    View
} from 'react-native';

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
              resizeMode={'contain'}
              style={{width:200,height:200}}
          />
        </View>
        <View style={[styles.buttonWrapper]}>
          <Button
              onPress={this._onLoginPress}
              title="Login"
              color="#841584"
          />
          <Button
              onPress={this._onSignupPress}
              title="Sign-up"
              color="#841584"
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
      this.navigate('LoginForm', { data: 'Sharma' });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: '#fff',
  },
  logoContainer:{
    alignItems:'center',
  },
  buttonWrapper:{
    justifyContent:'space-around',
    paddingHorizontal:20,
    flex:0.5
  }
});
