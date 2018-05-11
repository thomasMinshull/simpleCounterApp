/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { x: 0 } 
  }

  increment = () => {
    const nextValue = this.state.x + 1 
    this.setState({ x: nextValue })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          welcome to Counter 
        </Text>
        <Text >
          Your current count is { `${this.state.x }` }
        </Text>
        <Button onPress= { this.increment } title= "Tap Me Pls!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
