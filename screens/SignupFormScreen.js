import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';

export default class SignupFormScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView style={styles.container}>
              <View style={styles.formContainer}>

                <FormLabel>Name</FormLabel>
                <FormInput/>
                <FormValidationMessage>Name error message</FormValidationMessage>

                <FormLabel>Email</FormLabel>
                <FormInput/>
                <FormValidationMessage>Email error message</FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput/>
                <FormValidationMessage>Password error message</FormValidationMessage>

              </View>
              <View style={styles.btnContainer}>
                <Button
                    title='Signup'
                    backgroundColor={'#841584'}
                />
              </View>
            </ScrollView>
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
