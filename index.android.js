/**
 * Sample React Native App
 * https://facebook.github.io/react-native/docs/tutorial.html#content
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  Navigator,
  NavigationExperimental,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <Text>欢迎来到新世界!</Text>
    )
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    )
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Rexxar'/>
        <Greeting name='Jaina'/>
        <Greeting name='Vallera'/>
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
