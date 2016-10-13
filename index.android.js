/**
 * Sample React Native App
 * https://facebook.github.io/react-native/docs/tutorial.html#content
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <Text>热烈欢迎来到新世界！</Text>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
