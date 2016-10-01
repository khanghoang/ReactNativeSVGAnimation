/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import {
  Svg,
  Path
} from 'react-native-svg';

export default class Animation extends React.Component {

  // constructor() {
  //   super();
  //   this._animatedValueCircle = new Animated.Value(1000);
  //   this._animatedValueTick = new Animated.Value(79.09);
  // }

  componentDidMount() {
    this.reset();
  }

  reset = () => {
    this._animatedValueCircle = new Animated.Value(1000);
    this._animatedValueTick = new Animated.Value(79.09);
    Animated.timing(this._animatedValueCircle, {
      toValue: 0,
      duration: 1500,
      easing: Easing.inOut(Easing.cubic),
    }).start();
    Animated.timing(this._animatedValueTick, {
      toValue: 0,
      duration: 500,
      easing: Easing.inOut(Easing.cubic),
      delay: 700,
    }).start();
  }

  render () {
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Svg height="200" width="200">
          <AnimatedPath fill="none" strokeLinecap="round" stroke="#E34F26" strokeMiterlimit={1} strokeWidth="6" d="M 100  100 m -75  0 a 75 75 0 1 0 150 0 a 75 75 0 1 0 -150 0" strokeDasharray="1000" strokeDashoffset={this._animatedValueCircle} />
          <AnimatedPath x="50" y="50" fill="none" strokeLinecap="round" stroke="#E34F26" strokeMiterlimit={1} strokeWidth="6" d="M20.8 51c0 0 20.8 18.2 21.5 18.2c0.6 0 33.3-38.5 33.3-38.5" strokeDasharray="79.09" strokeDashoffset={this._animatedValueTick} />
        </Svg>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

