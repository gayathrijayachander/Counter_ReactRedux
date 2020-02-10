import store from './Redux/store';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Index from './Index';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}