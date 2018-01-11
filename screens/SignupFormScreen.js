import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import { FormLabel, FormInput,FormValidationMessage, Button } from 'react-native-elements';
import firebase from 'firebase';
import {connect} from 'react-redux'
import * as actions from '../actions/signup';

class SignupFormScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView style={styles.container}>
              <View style={styles.formContainer}>

                <FormLabel>Name</FormLabel>
                <FormInput
                    onChangeText = {(txt)=>{ this._onInputTextChange('name', txt )}}
                    value = { this.props.name}
                    placeholder={'John Doe'}
                />

                <FormLabel>Email</FormLabel>
                <FormInput
                    onChangeText = {(txt)=>{this. _onInputTextChange('email', txt )}}
                    value = { this.props.email}
                    placeholder={'john.doe@gmail.com'}
                />

                <FormLabel>Password</FormLabel>
                <FormInput
                    onChangeText = {(txt)=>{ this._onInputTextChange('password', txt )}}
                    value = { this.props.password}
                    placeholder={'password'}
                />

                <FormValidationMessage>Generic error message</FormValidationMessage>

              </View>
              <View style={styles.btnContainer}>
                <Button
                    title='Signup'
                    backgroundColor={'#841584'}
                    onPress={this._onSignupPress}
                />
              </View>
            </ScrollView>
        );
    }

    _onSignupPress = () => {
        this.props.signupUser(user);
    };

    _onInputTextChange = (field, value) => {
        console.log('holaa ')
        this.props.updateSubmitForm(field, value);
    };
}

function mapStateToProps(state, ownProps){
    return {
        name : state.signupForm.name,
        email : state.signupForm.email,
        password : state.signupForm.password,
        error: state.signupForm.error //todo
    }
}

export default connect(mapStateToProps, actions)(SignupFormScreen);

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