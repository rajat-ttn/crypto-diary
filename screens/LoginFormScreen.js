import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';

export default class LoginFormScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props){
      super(props);
      console.log('login Form constructor called!!!!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>

          <FormLabel>Email</FormLabel>
          <FormInput/>
          <FormLabel>Password</FormLabel>
          <FormInput/>
          <FormValidationMessage>Password error message</FormValidationMessage>

        </View>
        <View style={styles.btnContainer}>
        <Button
            title='Login'
            backgroundColor={'#841584'}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer:{
    marginTop:20
  },
  btnContainer:{
    marginTop:50
  }
});
