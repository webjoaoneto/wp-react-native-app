import React, { Component } from 'react';
import {
  AppRegistry,
  Container,
  View
} from 'react-native';

import Routes from './src/Routes.js';

export default class ReactWp extends Component {
  render() {
    return (
        <Routes />
    );
  }
}

AppRegistry.registerComponent('ReactWp', () => ReactWp);
