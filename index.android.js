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

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Togg;e the state every second
    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1e3);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    )
  }
}

class BlinkApp extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so greet' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me  look at me look at me' />
      </View>
    )
  }
}

class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

class JustifyContentBasics extends Component {
  render() {
    return (
      // Try setting `justifyContent` to `center`
      // Try setting `flexDirection` to `row`
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

class AlignItemsBasics extends Component {
  render() {
    return (
      // Try setting `alignItems` to `flex-start`
      // Try setting `justifyContent` to `flex-end`
      // Try setting `flexDirection` to `row`
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }

  render() {
    return (
      <View style={{padding: 40}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}

class IScolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>If you like</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>Scrolling down</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>What is the best</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>Framework around?</Text>
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Image source={require('./img/favicon.png')} />
        <Text style={{fontSize: 96}}>React Native</Text>
      </ScrollView>
    )
  }
}

class ListViewBasics extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John','Joel','James','Jimmy','Jackson','Jillian','Julie','Devin'
      ])
    }
  }

  render() {
    return (
      <View style={{paddingTop: 22, flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={{fontSize: 80}}>{rowData}</Text>}
          />
      </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
