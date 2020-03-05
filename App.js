import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './reducer';
import RepoList from './RepoList';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.appHeader}>
            <Text style={styles.headerText}>Redux with React Native fetching data</Text>
          </View>
          <View style={styles.container}>
            <RepoList />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appHeader: {
    height: '8.5%',
    alignItems: 'center',
    backgroundColor: '#38ada9'
  },
  headerText: {
    marginTop: '4%',
    fontWeight: 'bold',
    fontSize: 21,
    color: 'snow'
  },
});