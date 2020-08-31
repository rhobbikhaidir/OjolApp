/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './Router';

import { Provider } from 'react-redux'
import { store } from './redux';



const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Router />
    </NavigationContainer>
    </Provider>

  );
};

const styles = StyleSheet.create({
  textTitle: {
    textAlign: 'center'
  },
});

export default App;
