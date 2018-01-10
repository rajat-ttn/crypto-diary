import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import {  Entypo } from '@expo/vector-icons';

export default class FooScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Foo',
        drawerIcon: ({ tintColor }) => (
            <Entypo name="home" size={24} />
        ),
    };

    render() {
    return (
      <ScrollView style={styles.container}>
        <Text>This is Foo screen!</Text>
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
