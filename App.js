import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import firebase from 'firebase';
import { Provider } from 'react-redux' //← Bridge React and Redux
import store from './store';
import notifyAuthStateChange from './actions/notifyAuthStateChange'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <Provider store={store}>
            <View style={styles.container}>
              <View style={{...Platform.select({ios:{height:20}, android:{height:24}})}}>
                  { Platform.OS === 'ios' && <StatusBar barStyle="dark-content" /> }
                  { Platform.OS === 'android' && <View style={styles.statusBarUnderlay} /> }
              </View>
              <RootNavigation />
            </View>
          </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  componentWillMount = () =>{
        firebase.initializeApp( {
            apiKey: "AIzaSyBfTx9D1iL3877JLt_yHTovWY-3goGs41E",
            authDomain: "auth-4dcf8.firebaseapp.com",
            databaseURL: "https://auth-4dcf8.firebaseio.com",
            projectId: "auth-4dcf8",
            storageBucket: "auth-4dcf8.appspot.com",
            messagingSenderId: "971504198072"
        });

        firebase.auth().onAuthStateChanged((user) => {
            store.dispatch(notifyAuthStateChange(user))
        });
    };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
