import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SignupFormScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>This is signup-form screen!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
